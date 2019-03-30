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

import { quotes } from '../quotes';

describe('quotes', () => {
  it('should return a function', () => {
    const result = quotes();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `quotes` as component and css prop', () => {
    const result = quotes()({ quotes: 'inherit' });
    expect(toStyles(result)).toEqual({ quotes: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = quotes<'a'>()({ quotes: 'a' });
    expect(toStyles(result)).toEqual({ quotes: 'a' });
  });

  it('should use an interface which marks `quotes` as optional', () => {
    const result = quotes<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = quotes<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ quotes: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      quotes: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = quotes<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      quotes: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      quotes: 'a',
      [MQ.D]: {
        quotes: 'b',
      },
      [MQ.T]: {
        quotes: 'c',
      },
      [MQ.M]: {
        quotes: 'd',
      },
    });
  });
});
