import { createPaddingInlineStart } from '../paddingInlineStart';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createPaddingInlineStart', () => {
  it('should return a function', () => {
    const result = createPaddingInlineStart();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createPaddingInlineStart` as component and css prop', () => {
    const result = createPaddingInlineStart()({
      paddingInlineStart: 'inherit',
    });
    expect(toStyles(result)).toEqual({ paddingInlineStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createPaddingInlineStart<'a'>()({ paddingInlineStart: 'a' });
    expect(toStyles(result)).toEqual({ paddingInlineStart: 'a' });
  });

  it('should use an interface which marks `createPaddingInlineStart` as optional', () => {
    const result = createPaddingInlineStart<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createPaddingInlineStart<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ paddingInlineStart: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      paddingInlineStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createPaddingInlineStart<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      paddingInlineStart: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      paddingInlineStart: 'a',
      [MQ.D]: {
        paddingInlineStart: 'b',
      },
      [MQ.T]: {
        paddingInlineStart: 'c',
      },
      [MQ.M]: {
        paddingInlineStart: 'd',
      },
    });
  });
});
