import { createTextEmphasis } from '../textEmphasis';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createTextEmphasis', () => {
  it('should return a function', () => {
    const result = createTextEmphasis();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createTextEmphasis` as component and css prop', () => {
    const result = createTextEmphasis()({ textEmphasis: 'inherit' });
    expect(toStyles(result)).toEqual({ textEmphasis: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createTextEmphasis<'a'>()({ textEmphasis: 'a' });
    expect(toStyles(result)).toEqual({ textEmphasis: 'a' });
  });

  it('should use an interface which marks `createTextEmphasis` as optional', () => {
    const result = createTextEmphasis<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createTextEmphasis<'value', never, IThemeWithoutBreakpoints>(
      {
        key: 'dummy',
      },
    )({ textEmphasis: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      textEmphasis: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createTextEmphasis<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      textEmphasis: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      textEmphasis: 'a',
      [MQ.D]: {
        textEmphasis: 'b',
      },
      [MQ.T]: {
        textEmphasis: 'c',
      },
      [MQ.M]: {
        textEmphasis: 'd',
      },
    });
  });
});
