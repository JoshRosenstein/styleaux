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

import { scrollPaddingBlockStart } from '../scrollPaddingBlockStart';

describe('scrollPaddingBlockStart', () => {
  it('should return a function', () => {
    const result = scrollPaddingBlockStart();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `scrollPaddingBlockStart` as component and css prop', () => {
    const result = scrollPaddingBlockStart()({ scrollPaddingBlockStart: 'inherit' });
    expect(toStyles(result)).toEqual({ scrollPaddingBlockStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollPaddingBlockStart<'a'>()({ scrollPaddingBlockStart: 'a' });
    expect(toStyles(result)).toEqual({ scrollPaddingBlockStart: 'a' });
  });

  it('should use an interface which marks `scrollPaddingBlockStart` as optional', () => {
    const result = scrollPaddingBlockStart<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = scrollPaddingBlockStart<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ scrollPaddingBlockStart: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      scrollPaddingBlockStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollPaddingBlockStart<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      scrollPaddingBlockStart: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      scrollPaddingBlockStart: 'a',
      [MQ.D]: {
        scrollPaddingBlockStart: 'b',
      },
      [MQ.T]: {
        scrollPaddingBlockStart: 'c',
      },
      [MQ.M]: {
        scrollPaddingBlockStart: 'd',
      },
    });
  });
});
