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

import { scrollPaddingBlockEnd } from '../scrollPaddingBlockEnd';

describe('scrollPaddingBlockEnd', () => {
  it('should return a function', () => {
    const result = scrollPaddingBlockEnd();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `scrollPaddingBlockEnd` as component and css prop', () => {
    const result = scrollPaddingBlockEnd()({ scrollPaddingBlockEnd: 'inherit' });
    expect(toStyles(result)).toEqual({ scrollPaddingBlockEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollPaddingBlockEnd<'a'>()({ scrollPaddingBlockEnd: 'a' });
    expect(toStyles(result)).toEqual({ scrollPaddingBlockEnd: 'a' });
  });

  it('should use an interface which marks `scrollPaddingBlockEnd` as optional', () => {
    const result = scrollPaddingBlockEnd<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = scrollPaddingBlockEnd<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ scrollPaddingBlockEnd: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      scrollPaddingBlockEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollPaddingBlockEnd<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      scrollPaddingBlockEnd: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      scrollPaddingBlockEnd: 'a',
      [MQ.D]: {
        scrollPaddingBlockEnd: 'b',
      },
      [MQ.T]: {
        scrollPaddingBlockEnd: 'c',
      },
      [MQ.M]: {
        scrollPaddingBlockEnd: 'd',
      },
    });
  });
});
