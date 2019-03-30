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

import { scrollPaddingLeft } from '../scrollPaddingLeft';

describe('scrollPaddingLeft', () => {
  it('should return a function', () => {
    const result = scrollPaddingLeft();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `scrollPaddingLeft` as component and css prop', () => {
    const result = scrollPaddingLeft()({ scrollPaddingLeft: 'inherit' });
    expect(toStyles(result)).toEqual({ scrollPaddingLeft: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollPaddingLeft<'a'>()({ scrollPaddingLeft: 'a' });
    expect(toStyles(result)).toEqual({ scrollPaddingLeft: 'a' });
  });

  it('should use an interface which marks `scrollPaddingLeft` as optional', () => {
    const result = scrollPaddingLeft<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = scrollPaddingLeft<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ scrollPaddingLeft: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      scrollPaddingLeft: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollPaddingLeft<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      scrollPaddingLeft: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      scrollPaddingLeft: 'a',
      [MQ.D]: {
        scrollPaddingLeft: 'b',
      },
      [MQ.T]: {
        scrollPaddingLeft: 'c',
      },
      [MQ.M]: {
        scrollPaddingLeft: 'd',
      },
    });
  });
});
