import { createInsetInline } from '../insetInline';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createInsetInline', () => {
  it('should return a function', () => {
    const result = createInsetInline();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createInsetInline` as component and css prop', () => {
    const result = createInsetInline()({ insetInline: 'inherit' });
    expect(toStyles(result)).toEqual({ insetInline: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createInsetInline<'a'>()({ insetInline: 'a' });
    expect(toStyles(result)).toEqual({ insetInline: 'a' });
  });

  it('should use an interface which marks `createInsetInline` as optional', () => {
    const result = createInsetInline<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createInsetInline<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ insetInline: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      insetInline: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createInsetInline<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      insetInline: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      insetInline: 'a',
      [MQ.D]: {
        insetInline: 'b',
      },
      [MQ.T]: {
        insetInline: 'c',
      },
      [MQ.M]: {
        insetInline: 'd',
      },
    });
  });
});
