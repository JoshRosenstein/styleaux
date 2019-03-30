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

import { textEmphasisColor } from '../textEmphasisColor';

describe('textEmphasisColor', () => {
  it('should return a function', () => {
    const result = textEmphasisColor();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `textEmphasisColor` as component and css prop', () => {
    const result = textEmphasisColor()({ textEmphasisColor: 'inherit' });
    expect(toStyles(result)).toEqual({ textEmphasisColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = textEmphasisColor<'a'>()({ textEmphasisColor: 'a' });
    expect(toStyles(result)).toEqual({ textEmphasisColor: 'a' });
  });

  it('should use an interface which marks `textEmphasisColor` as optional', () => {
    const result = textEmphasisColor<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = textEmphasisColor<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ textEmphasisColor: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      textEmphasisColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = textEmphasisColor<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      textEmphasisColor: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      textEmphasisColor: 'a',
      [MQ.D]: {
        textEmphasisColor: 'b',
      },
      [MQ.T]: {
        textEmphasisColor: 'c',
      },
      [MQ.M]: {
        textEmphasisColor: 'd',
      },
    });
  });
});
