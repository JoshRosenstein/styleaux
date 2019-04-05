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

import { createCounterIncrement } from '../counterIncrement';

describe('counterIncrement', () => {
  it('should return a function', () => {
    const result = createCounterIncrement();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `counterIncrement` as component and css prop', () => {
    const result = createCounterIncrement()({ counterIncrement: 'inherit' });
    expect(toStyles(result)).toEqual({ counterIncrement: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createCounterIncrement<'a'>()({ counterIncrement: 'a' });
    expect(toStyles(result)).toEqual({ counterIncrement: 'a' });
  });

  it('should use an interface which marks `counterIncrement` as optional', () => {
    const result = createCounterIncrement<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createCounterIncrement<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ counterIncrement: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      counterIncrement: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createCounterIncrement<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      counterIncrement: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      counterIncrement: 'a',
      [MQ.D]: {
        counterIncrement: 'b',
      },
      [MQ.T]: {
        counterIncrement: 'c',
      },
      [MQ.M]: {
        counterIncrement: 'd',
      },
    });
  });
});
