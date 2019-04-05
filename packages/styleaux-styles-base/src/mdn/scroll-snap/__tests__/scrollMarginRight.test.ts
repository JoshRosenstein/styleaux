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

import { createScrollMarginRight } from '../scrollMarginRight';

describe('scrollMarginRight', () => {
  it('should return a function', () => {
    const result = createScrollMarginRight();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `scrollMarginRight` as component and css prop', () => {
    const result = createScrollMarginRight()({ scrollMarginRight: 'inherit' });
    expect(toStyles(result)).toEqual({ scrollMarginRight: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createScrollMarginRight<'a'>()({ scrollMarginRight: 'a' });
    expect(toStyles(result)).toEqual({ scrollMarginRight: 'a' });
  });

  it('should use an interface which marks `scrollMarginRight` as optional', () => {
    const result = createScrollMarginRight<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createScrollMarginRight<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ scrollMarginRight: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      scrollMarginRight: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createScrollMarginRight<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      scrollMarginRight: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      scrollMarginRight: 'a',
      [MQ.D]: {
        scrollMarginRight: 'b',
      },
      [MQ.T]: {
        scrollMarginRight: 'c',
      },
      [MQ.M]: {
        scrollMarginRight: 'd',
      },
    });
  });
});
