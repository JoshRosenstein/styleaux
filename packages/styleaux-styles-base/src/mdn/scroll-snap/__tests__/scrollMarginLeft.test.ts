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

import { scrollMarginLeft } from '../scrollMarginLeft';

describe('scrollMarginLeft', () => {
  it('should return a function', () => {
    const result = scrollMarginLeft();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `scrollMarginLeft` as component and css prop', () => {
    const result = scrollMarginLeft()({ scrollMarginLeft: 'inherit' });
    expect(toStyles(result)).toEqual({ scrollMarginLeft: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollMarginLeft<'a'>()({ scrollMarginLeft: 'a' });
    expect(toStyles(result)).toEqual({ scrollMarginLeft: 'a' });
  });

  it('should use an interface which marks `scrollMarginLeft` as optional', () => {
    const result = scrollMarginLeft<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = scrollMarginLeft<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ scrollMarginLeft: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      scrollMarginLeft: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollMarginLeft<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      scrollMarginLeft: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      scrollMarginLeft: 'a',
      [MQ.D]: {
        scrollMarginLeft: 'b',
      },
      [MQ.T]: {
        scrollMarginLeft: 'c',
      },
      [MQ.M]: {
        scrollMarginLeft: 'd',
      },
    });
  });
});
