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

import { createScrollMargin } from '../scrollMargin';

describe('scrollMargin', () => {
  it('should return a function', () => {
    const result = createScrollMargin();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `scrollMargin` as component and css prop', () => {
    const result = createScrollMargin()({ scrollMargin: 'inherit' });
    expect(toStyles(result)).toEqual({ scrollMargin: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createScrollMargin<'a'>()({ scrollMargin: 'a' });
    expect(toStyles(result)).toEqual({ scrollMargin: 'a' });
  });

  it('should use an interface which marks `scrollMargin` as optional', () => {
    const result = createScrollMargin<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createScrollMargin<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ scrollMargin: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      scrollMargin: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createScrollMargin<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      scrollMargin: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      scrollMargin: 'a',
      [MQ.D]: {
        scrollMargin: 'b',
      },
      [MQ.T]: {
        scrollMargin: 'c',
      },
      [MQ.M]: {
        scrollMargin: 'd',
      },
    });
  });
});
