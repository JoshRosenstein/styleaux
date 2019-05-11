import { createBorderInline } from '../borderInline';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createBorderInline', () => {
  it('should return a function', () => {
    const result = createBorderInline();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBorderInline` as component and css prop', () => {
    const result = createBorderInline()({ borderInline: 'inherit' });
    expect(toStyles(result)).toEqual({ borderInline: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderInline<'a'>()({ borderInline: 'a' });
    expect(toStyles(result)).toEqual({ borderInline: 'a' });
  });

  it('should use an interface which marks `createBorderInline` as optional', () => {
    const result = createBorderInline<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBorderInline<'value', never, IThemeWithoutBreakpoints>(
      {
        key: 'dummy',
      },
    )({ borderInline: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderInline: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderInline<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      borderInline: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderInline: 'a',
      [MQ.D]: {
        borderInline: 'b',
      },
      [MQ.T]: {
        borderInline: 'c',
      },
      [MQ.M]: {
        borderInline: 'd',
      },
    });
  });
});
