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

import { left } from '../left';

describe('left', () => {
  it('should return a function', () => {
    const result = left();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `left` as component and css prop', () => {
    const result = left()({ left: 'inherit' });
    expect(toStyles(result)).toEqual({ left: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = left<'a'>()({ left: 'a' });
    expect(toStyles(result)).toEqual({ left: 'a' });
  });

  it('should use an interface which marks `left` as optional', () => {
    const result = left<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = left<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ left: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      left: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = left<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      left: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      left: 'a',
      [MQ.D]: {
        left: 'b',
      },
      [MQ.T]: {
        left: 'c',
      },
      [MQ.M]: {
        left: 'd',
      },
    });
  });
});
