import { createInlineSize } from '../inlineSize';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createInlineSize', () => {
  it('should return a function', () => {
    const result = createInlineSize();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createInlineSize` as component and css prop', () => {
    const result = createInlineSize()({ inlineSize: 'inherit' });
    expect(toStyles(result)).toEqual({ inlineSize: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createInlineSize<'a'>()({ inlineSize: 'a' });
    expect(toStyles(result)).toEqual({ inlineSize: 'a' });
  });

  it('should use an interface which marks `createInlineSize` as optional', () => {
    const result = createInlineSize<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createInlineSize<'value', never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ inlineSize: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      inlineSize: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createInlineSize<'a' | 'b' | 'c' | 'd', IMedia, ITheme>()({
      inlineSize: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      inlineSize: 'a',
      [MQ.D]: {
        inlineSize: 'b',
      },
      [MQ.T]: {
        inlineSize: 'c',
      },
      [MQ.M]: {
        inlineSize: 'd',
      },
    });
  });
});
