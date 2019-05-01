import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createBackgroundPosition } from '../backgroundPosition';

describe('createBackgroundPosition', () => {
  it('should return a function', () => {
    const result = createBackgroundPosition();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBackgroundPosition` as component and css prop', () => {
    const result = createBackgroundPosition()({ backgroundPosition: 'inherit' });
    expect(toStyles(result)).toEqual({ backgroundPosition: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBackgroundPosition<'a'>()({ backgroundPosition: 'a' });
    expect(toStyles(result)).toEqual({ backgroundPosition: 'a' });
  });

  it('should use an interface which marks `createBackgroundPosition` as optional', () => {
    const result = createBackgroundPosition<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBackgroundPosition<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ backgroundPosition: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      backgroundPosition: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBackgroundPosition<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      backgroundPosition: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      backgroundPosition: 'a',
      [MQ.D]: {
        backgroundPosition: 'b',
      },
      [MQ.T]: {
        backgroundPosition: 'c',
      },
      [MQ.M]: {
        backgroundPosition: 'd',
      },
    });
  });
});
