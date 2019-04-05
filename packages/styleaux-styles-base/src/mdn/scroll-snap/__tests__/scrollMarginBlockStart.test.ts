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

import { createScrollMarginBlockStart } from '../scrollMarginBlockStart';

describe('scrollMarginBlockStart', () => {
  it('should return a function', () => {
    const result = createScrollMarginBlockStart();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `scrollMarginBlockStart` as component and css prop', () => {
    const result = createScrollMarginBlockStart()({ scrollMarginBlockStart: 'inherit' });
    expect(toStyles(result)).toEqual({ scrollMarginBlockStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createScrollMarginBlockStart<'a'>()({ scrollMarginBlockStart: 'a' });
    expect(toStyles(result)).toEqual({ scrollMarginBlockStart: 'a' });
  });

  it('should use an interface which marks `scrollMarginBlockStart` as optional', () => {
    const result = createScrollMarginBlockStart<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createScrollMarginBlockStart<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ scrollMarginBlockStart: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      scrollMarginBlockStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createScrollMarginBlockStart<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      scrollMarginBlockStart: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      scrollMarginBlockStart: 'a',
      [MQ.D]: {
        scrollMarginBlockStart: 'b',
      },
      [MQ.T]: {
        scrollMarginBlockStart: 'c',
      },
      [MQ.M]: {
        scrollMarginBlockStart: 'd',
      },
    });
  });
});
