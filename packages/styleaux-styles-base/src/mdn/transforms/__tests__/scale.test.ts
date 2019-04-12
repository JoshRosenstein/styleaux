import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createScale } from '../scale';

describe('createScale', () => {
  it('should return a function', () => {
    const result = createScale();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createScale` as component and css prop', () => {
    const result = createScale()({ scale: 'inherit' });
    expect(toStyles(result)).toEqual({ scale: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createScale<'a'>()({ scale: 'a' });
    expect(toStyles(result)).toEqual({ scale: 'a' });
  });

  it('should use an interface which marks `createScale` as optional', () => {
    const result = createScale<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createScale<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ scale: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      scale: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createScale<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      scale: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      scale: 'a',
      [MQ.D]: {
        scale: 'b',
      },
      [MQ.T]: {
        scale: 'c',
      },
      [MQ.M]: {
        scale: 'd',
      },
    });
  });
});
