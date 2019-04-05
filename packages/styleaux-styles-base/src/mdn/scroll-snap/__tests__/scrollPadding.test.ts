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

import { createScrollPadding } from '../scrollPadding';

describe('scrollPadding', () => {
  it('should return a function', () => {
    const result = createScrollPadding();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `scrollPadding` as component and css prop', () => {
    const result = createScrollPadding()({ scrollPadding: 'inherit' });
    expect(toStyles(result)).toEqual({ scrollPadding: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createScrollPadding<'a'>()({ scrollPadding: 'a' });
    expect(toStyles(result)).toEqual({ scrollPadding: 'a' });
  });

  it('should use an interface which marks `scrollPadding` as optional', () => {
    const result = createScrollPadding<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createScrollPadding<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ scrollPadding: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      scrollPadding: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createScrollPadding<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      scrollPadding: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      scrollPadding: 'a',
      [MQ.D]: {
        scrollPadding: 'b',
      },
      [MQ.T]: {
        scrollPadding: 'c',
      },
      [MQ.M]: {
        scrollPadding: 'd',
      },
    });
  });
});
