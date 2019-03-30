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

import { scrollSnapType } from '../scrollSnapType';

describe('scrollSnapType', () => {
  it('should return a function', () => {
    const result = scrollSnapType();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `scrollSnapType` as component and css prop', () => {
    const result = scrollSnapType()({ scrollSnapType: 'inherit' });
    expect(toStyles(result)).toEqual({ scrollSnapType: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollSnapType<'a'>()({ scrollSnapType: 'a' });
    expect(toStyles(result)).toEqual({ scrollSnapType: 'a' });
  });

  it('should use an interface which marks `scrollSnapType` as optional', () => {
    const result = scrollSnapType<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = scrollSnapType<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ scrollSnapType: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      scrollSnapType: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollSnapType<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      scrollSnapType: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      scrollSnapType: 'a',
      [MQ.D]: {
        scrollSnapType: 'b',
      },
      [MQ.T]: {
        scrollSnapType: 'c',
      },
      [MQ.M]: {
        scrollSnapType: 'd',
      },
    });
  });
});
