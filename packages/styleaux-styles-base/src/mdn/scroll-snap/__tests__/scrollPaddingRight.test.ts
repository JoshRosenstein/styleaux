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

import { createScrollPaddingRight } from '../scrollPaddingRight';

describe('scrollPaddingRight', () => {
  it('should return a function', () => {
    const result = createScrollPaddingRight();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `scrollPaddingRight` as component and css prop', () => {
    const result = createScrollPaddingRight()({ scrollPaddingRight: 'inherit' });
    expect(toStyles(result)).toEqual({ scrollPaddingRight: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createScrollPaddingRight<'a'>()({ scrollPaddingRight: 'a' });
    expect(toStyles(result)).toEqual({ scrollPaddingRight: 'a' });
  });

  it('should use an interface which marks `scrollPaddingRight` as optional', () => {
    const result = createScrollPaddingRight<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createScrollPaddingRight<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ scrollPaddingRight: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      scrollPaddingRight: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createScrollPaddingRight<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      scrollPaddingRight: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      scrollPaddingRight: 'a',
      [MQ.D]: {
        scrollPaddingRight: 'b',
      },
      [MQ.T]: {
        scrollPaddingRight: 'c',
      },
      [MQ.M]: {
        scrollPaddingRight: 'd',
      },
    });
  });
});
