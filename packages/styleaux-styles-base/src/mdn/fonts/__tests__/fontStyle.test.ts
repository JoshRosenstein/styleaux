import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ
} from '../../../__testutils__/theme';
import {
toStyles
} from '../../../__testutils__/toStyles';

import { createFontStyle } from '../fontStyle';

describe('fontStyle', () => {
  it('should return a function', () => {
    const result = createFontStyle();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `fontStyle` as component and css prop', () => {
    const result = createFontStyle()({ fontStyle: 'inherit' });
    expect(toStyles(result)).toEqual({ fontStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createFontStyle<'a'>()({ fontStyle: 'a' });
    expect(toStyles(result)).toEqual({ fontStyle: 'a' });
  });

  it('should use an interface which marks `fontStyle` as optional', () => {
    const result = createFontStyle<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createFontStyle<'value',never,IThemeWithoutBreakpoints>({
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
