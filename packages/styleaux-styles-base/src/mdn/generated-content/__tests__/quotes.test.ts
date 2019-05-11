import { createQuotes } from '../quotes';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createQuotes', () => {
  it('should return a function', () => {
    const result = createQuotes();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createQuotes` as component and css prop', () => {
    const result = createQuotes()({ quotes: 'inherit' });
    expect(toStyles(result)).toEqual({ quotes: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createQuotes<'a'>()({ quotes: 'a' });
    expect(toStyles(result)).toEqual({ quotes: 'a' });
  });

  it('should use an interface which marks `createQuotes` as optional', () => {
    const result = createQuotes<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createQuotes<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ quotes: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      quotes: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createQuotes<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
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
