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

import { textEmphasisStyle } from '../textEmphasisStyle';

describe('textEmphasisStyle', () => {
  it('should return a function', () => {
    const result = textEmphasisStyle();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `textEmphasisStyle` as component and css prop', () => {
    const result = textEmphasisStyle()({ textEmphasisStyle: 'inherit' });
    expect(toStyles(result)).toEqual({ textEmphasisStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textEmphasisStyle<'a'>()({ textEmphasisStyle: 'a' });
    expect(toStyles(result)).toEqual({ textEmphasisStyle: 'a' });
  });

  it('should use an interface which marks `textEmphasisStyle` as optional', () => {
    const result = textEmphasisStyle<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = textEmphasisStyle<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ textEmphasisStyle: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      textEmphasisStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textEmphasisStyle<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      textEmphasisStyle: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      textEmphasisStyle: 'a',
      [MQ.D]: {
        textEmphasisStyle: 'b',
      },
      [MQ.T]: {
        textEmphasisStyle: 'c',
      },
      [MQ.M]: {
        textEmphasisStyle: 'd',
      },
    });
  });
});
