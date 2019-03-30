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

import { scrollMarginBottom } from '../scrollMarginBottom';

describe('scrollMarginBottom', () => {
  it('should return a function', () => {
    const result = scrollMarginBottom();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `scrollMarginBottom` as component and css prop', () => {
    const result = scrollMarginBottom()({ scrollMarginBottom: 'inherit' });
    expect(toStyles(result)).toEqual({ scrollMarginBottom: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollMarginBottom<'a'>()({ scrollMarginBottom: 'a' });
    expect(toStyles(result)).toEqual({ scrollMarginBottom: 'a' });
  });

  it('should use an interface which marks `scrollMarginBottom` as optional', () => {
    const result = scrollMarginBottom<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = scrollMarginBottom<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ scrollMarginBottom: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      scrollMarginBottom: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollMarginBottom<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      scrollMarginBottom: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      scrollMarginBottom: 'a',
      [MQ.D]: {
        scrollMarginBottom: 'b',
      },
      [MQ.T]: {
        scrollMarginBottom: 'c',
      },
      [MQ.M]: {
        scrollMarginBottom: 'd',
      },
    });
  });
});
