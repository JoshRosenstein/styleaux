import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createBackgroundOrigin } from '../backgroundOrigin';

describe('createBackgroundOrigin', () => {
  it('should return a function', () => {
    const result = createBackgroundOrigin();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBackgroundOrigin` as component and css prop', () => {
    const result = createBackgroundOrigin()({ backgroundOrigin: 'inherit' });
    expect(toStyles(result)).toEqual({ backgroundOrigin: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBackgroundOrigin<'a'>()({ backgroundOrigin: 'a' });
    expect(toStyles(result)).toEqual({ backgroundOrigin: 'a' });
  });

  it('should use an interface which marks `createBackgroundOrigin` as optional', () => {
    const result = createBackgroundOrigin<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBackgroundOrigin<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ backgroundOrigin: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      backgroundOrigin: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBackgroundOrigin<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      backgroundOrigin: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      backgroundOrigin: 'a',
      [MQ.D]: {
        backgroundOrigin: 'b',
      },
      [MQ.T]: {
        backgroundOrigin: 'c',
      },
      [MQ.M]: {
        backgroundOrigin: 'd',
      },
    });
  });
});
