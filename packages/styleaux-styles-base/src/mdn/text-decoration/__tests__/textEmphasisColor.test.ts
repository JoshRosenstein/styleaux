import { createTextEmphasisColor } from '../textEmphasisColor';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createTextEmphasisColor', () => {
  it('should return a function', () => {
    const result = createTextEmphasisColor();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createTextEmphasisColor` as component and css prop', () => {
    const result = createTextEmphasisColor()({ textEmphasisColor: 'inherit' });
    expect(toStyles(result)).toEqual({ textEmphasisColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createTextEmphasisColor<'a'>()({ textEmphasisColor: 'a' });
    expect(toStyles(result)).toEqual({ textEmphasisColor: 'a' });
  });

  it('should use an interface which marks `createTextEmphasisColor` as optional', () => {
    const result = createTextEmphasisColor<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createTextEmphasisColor<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ textEmphasisColor: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      textEmphasisColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createTextEmphasisColor<
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
