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

import { createScrollMarginTop } from '../scrollMarginTop';

describe('scrollMarginTop', () => {
  it('should return a function', () => {
    const result = createScrollMarginTop();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `scrollMarginTop` as component and css prop', () => {
    const result = createScrollMarginTop()({ scrollMarginTop: 'inherit' });
    expect(toStyles(result)).toEqual({ scrollMarginTop: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createScrollMarginTop<'a'>()({ scrollMarginTop: 'a' });
    expect(toStyles(result)).toEqual({ scrollMarginTop: 'a' });
  });

  it('should use an interface which marks `scrollMarginTop` as optional', () => {
    const result = createScrollMarginTop<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createScrollMarginTop<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ scrollMarginTop: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      scrollMarginTop: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createScrollMarginTop<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      scrollMarginTop: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      scrollMarginTop: 'a',
      [MQ.D]: {
        scrollMarginTop: 'b',
      },
      [MQ.T]: {
        scrollMarginTop: 'c',
      },
      [MQ.M]: {
        scrollMarginTop: 'd',
      },
    });
  });
});
