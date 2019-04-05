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

import { createTextEmphasisPosition } from '../textEmphasisPosition';

describe('textEmphasisPosition', () => {
  it('should return a function', () => {
    const result = createTextEmphasisPosition();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `textEmphasisPosition` as component and css prop', () => {
    const result = createTextEmphasisPosition()({ textEmphasisPosition: 'inherit' });
    expect(toStyles(result)).toEqual({ textEmphasisPosition: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createTextEmphasisPosition<'a'>()({ textEmphasisPosition: 'a' });
    expect(toStyles(result)).toEqual({ textEmphasisPosition: 'a' });
  });

  it('should use an interface which marks `textEmphasisPosition` as optional', () => {
    const result = createTextEmphasisPosition<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createTextEmphasisPosition<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ textEmphasisPosition: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      textEmphasisPosition: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createTextEmphasisPosition<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      textEmphasisPosition: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      textEmphasisPosition: 'a',
      [MQ.D]: {
        textEmphasisPosition: 'b',
      },
      [MQ.T]: {
        textEmphasisPosition: 'c',
      },
      [MQ.M]: {
        textEmphasisPosition: 'd',
      },
    });
  });
});
