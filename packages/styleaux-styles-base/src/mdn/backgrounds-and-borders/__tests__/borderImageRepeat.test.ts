import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createBorderImageRepeat } from '../borderImageRepeat';

describe('createBorderImageRepeat', () => {
  it('should return a function', () => {
    const result = createBorderImageRepeat();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBorderImageRepeat` as component and css prop', () => {
    const result = createBorderImageRepeat()({ borderImageRepeat: 'inherit' });
    expect(toStyles(result)).toEqual({ borderImageRepeat: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderImageRepeat<'a'>()({ borderImageRepeat: 'a' });
    expect(toStyles(result)).toEqual({ borderImageRepeat: 'a' });
  });

  it('should use an interface which marks `createBorderImageRepeat` as optional', () => {
    const result = createBorderImageRepeat<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBorderImageRepeat<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderImageRepeat: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderImageRepeat: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderImageRepeat<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      borderImageRepeat: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      borderImageRepeat: 'a',
      [MQ.D]: {
        borderImageRepeat: 'b',
      },
      [MQ.T]: {
        borderImageRepeat: 'c',
      },
      [MQ.M]: {
        borderImageRepeat: 'd',
      },
    });
  });
});
