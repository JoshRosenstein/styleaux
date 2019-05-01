import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createFontKerning } from '../fontKerning';

describe('createFontKerning', () => {
  it('should return a function', () => {
    const result = createFontKerning();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createFontKerning` as component and css prop', () => {
    const result = createFontKerning()({ fontKerning: 'inherit' });
    expect(toStyles(result)).toEqual({ fontKerning: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createFontKerning<'a'>()({ fontKerning: 'a' });
    expect(toStyles(result)).toEqual({ fontKerning: 'a' });
  });

  it('should use an interface which marks `createFontKerning` as optional', () => {
    const result = createFontKerning<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createFontKerning<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ fontKerning: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      fontKerning: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createFontKerning<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      fontKerning: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      fontKerning: 'a',
      [MQ.D]: {
        fontKerning: 'b',
      },
      [MQ.T]: {
        fontKerning: 'c',
      },
      [MQ.M]: {
        fontKerning: 'd',
      },
    });
  });
});
