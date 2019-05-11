import { createFontStretch } from '../fontStretch';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createFontStretch', () => {
  it('should return a function', () => {
    const result = createFontStretch();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createFontStretch` as component and css prop', () => {
    const result = createFontStretch()({ fontStretch: 'inherit' });
    expect(toStyles(result)).toEqual({ fontStretch: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createFontStretch<'a'>()({ fontStretch: 'a' });
    expect(toStyles(result)).toEqual({ fontStretch: 'a' });
  });

  it('should use an interface which marks `createFontStretch` as optional', () => {
    const result = createFontStretch<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createFontStretch<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ fontStretch: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      fontStretch: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createFontStretch<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      fontStretch: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      fontStretch: 'a',
      [MQ.D]: {
        fontStretch: 'b',
      },
      [MQ.T]: {
        fontStretch: 'c',
      },
      [MQ.M]: {
        fontStretch: 'd',
      },
    });
  });
});
