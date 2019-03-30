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

import { counterReset } from '../counterReset';

describe('counterReset', () => {
  it('should return a function', () => {
    const result = counterReset();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `counterReset` as component and css prop', () => {
    const result = counterReset()({ counterReset: 'inherit' });
    expect(toStyles(result)).toEqual({ counterReset: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = counterReset<'a'>()({ counterReset: 'a' });
    expect(toStyles(result)).toEqual({ counterReset: 'a' });
  });

  it('should use an interface which marks `counterReset` as optional', () => {
    const result = counterReset<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = counterReset<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ counterReset: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      counterReset: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = counterReset<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      counterReset: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      counterReset: 'a',
      [MQ.D]: {
        counterReset: 'b',
      },
      [MQ.T]: {
        counterReset: 'c',
      },
      [MQ.M]: {
        counterReset: 'd',
      },
    });
  });
});
