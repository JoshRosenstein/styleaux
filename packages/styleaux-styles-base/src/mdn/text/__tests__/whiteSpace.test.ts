import { createWhiteSpace } from '../whiteSpace';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createWhiteSpace', () => {
  it('should return a function', () => {
    const result = createWhiteSpace();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createWhiteSpace` as component and css prop', () => {
    const result = createWhiteSpace()({ whiteSpace: 'inherit' });
    expect(toStyles(result)).toEqual({ whiteSpace: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createWhiteSpace<'a'>()({ whiteSpace: 'a' });
    expect(toStyles(result)).toEqual({ whiteSpace: 'a' });
  });

  it('should use an interface which marks `createWhiteSpace` as optional', () => {
    const result = createWhiteSpace<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createWhiteSpace<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ whiteSpace: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      whiteSpace: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createWhiteSpace<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      whiteSpace: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      whiteSpace: 'a',
      [MQ.D]: {
        whiteSpace: 'b',
      },
      [MQ.T]: {
        whiteSpace: 'c',
      },
      [MQ.M]: {
        whiteSpace: 'd',
      },
    });
  });
});
