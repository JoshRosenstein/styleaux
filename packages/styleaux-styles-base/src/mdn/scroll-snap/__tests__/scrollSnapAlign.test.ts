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

import { scrollSnapAlign } from '../scrollSnapAlign';

describe('scrollSnapAlign', () => {
  it('should return a function', () => {
    const result = scrollSnapAlign();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `scrollSnapAlign` as component and css prop', () => {
    const result = scrollSnapAlign()({ scrollSnapAlign: 'inherit' });
    expect(toStyles(result)).toEqual({ scrollSnapAlign: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollSnapAlign<'a'>()({ scrollSnapAlign: 'a' });
    expect(toStyles(result)).toEqual({ scrollSnapAlign: 'a' });
  });

  it('should use an interface which marks `scrollSnapAlign` as optional', () => {
    const result = scrollSnapAlign<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = scrollSnapAlign<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ scrollSnapAlign: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      scrollSnapAlign: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollSnapAlign<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      scrollSnapAlign: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      scrollSnapAlign: 'a',
      [MQ.D]: {
        scrollSnapAlign: 'b',
      },
      [MQ.T]: {
        scrollSnapAlign: 'c',
      },
      [MQ.M]: {
        scrollSnapAlign: 'd',
      },
    });
  });
});
