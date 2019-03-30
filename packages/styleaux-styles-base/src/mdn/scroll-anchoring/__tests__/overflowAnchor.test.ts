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

import { overflowAnchor } from '../overflowAnchor';

describe('overflowAnchor', () => {
  it('should return a function', () => {
    const result = overflowAnchor();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `overflowAnchor` as component and css prop', () => {
    const result = overflowAnchor()({ overflowAnchor: 'inherit' });
    expect(toStyles(result)).toEqual({ overflowAnchor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = overflowAnchor<'a'>()({ overflowAnchor: 'a' });
    expect(toStyles(result)).toEqual({ overflowAnchor: 'a' });
  });

  it('should use an interface which marks `overflowAnchor` as optional', () => {
    const result = overflowAnchor<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = overflowAnchor<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ overflowAnchor: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      overflowAnchor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = overflowAnchor<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      overflowAnchor: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      overflowAnchor: 'a',
      [MQ.D]: {
        overflowAnchor: 'b',
      },
      [MQ.T]: {
        overflowAnchor: 'c',
      },
      [MQ.M]: {
        overflowAnchor: 'd',
      },
    });
  });
});
