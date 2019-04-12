import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createFontStyle } from '../fontStyle';

describe('createFontStyle', () => {
  it('should return a function', () => {
    const result = createFontStyle();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createFontStyle` as component and css prop', () => {
    const result = createFontStyle()({ fontStyle: 'inherit' });
    expect(toStyles(result)).toEqual({ fontStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createFontStyle<'a'>()({ fontStyle: 'a' });
    expect(toStyles(result)).toEqual({ fontStyle: 'a' });
  });

  it('should use an interface which marks `createFontStyle` as optional', () => {
    const result = createFontStyle<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createFontStyle<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ fontStyle: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      fontStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createFontStyle<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      fontStyle: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      fontStyle: 'a',
      [MQ.D]: {
        fontStyle: 'b',
      },
      [MQ.T]: {
        fontStyle: 'c',
      },
      [MQ.M]: {
        fontStyle: 'd',
      },
    });
  });
});
