import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createTextEmphasisStyle } from '../textEmphasisStyle';

describe('createTextEmphasisStyle', () => {
  it('should return a function', () => {
    const result = createTextEmphasisStyle();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createTextEmphasisStyle` as component and css prop', () => {
    const result = createTextEmphasisStyle()({ textEmphasisStyle: 'inherit' });
    expect(toStyles(result)).toEqual({ textEmphasisStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createTextEmphasisStyle<'a'>()({ textEmphasisStyle: 'a' });
    expect(toStyles(result)).toEqual({ textEmphasisStyle: 'a' });
  });

  it('should use an interface which marks `createTextEmphasisStyle` as optional', () => {
    const result = createTextEmphasisStyle<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createTextEmphasisStyle<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ textEmphasisStyle: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      textEmphasisStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createTextEmphasisStyle<
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
