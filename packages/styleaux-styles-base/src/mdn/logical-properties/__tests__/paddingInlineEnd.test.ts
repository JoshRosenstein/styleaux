import { createPaddingInlineEnd } from '../paddingInlineEnd';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createPaddingInlineEnd', () => {
  it('should return a function', () => {
    const result = createPaddingInlineEnd();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createPaddingInlineEnd` as component and css prop', () => {
    const result = createPaddingInlineEnd()({ paddingInlineEnd: 'inherit' });
    expect(toStyles(result)).toEqual({ paddingInlineEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createPaddingInlineEnd<'a'>()({ paddingInlineEnd: 'a' });
    expect(toStyles(result)).toEqual({ paddingInlineEnd: 'a' });
  });

  it('should use an interface which marks `createPaddingInlineEnd` as optional', () => {
    const result = createPaddingInlineEnd<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createPaddingInlineEnd<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ paddingInlineEnd: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      paddingInlineEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createPaddingInlineEnd<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      paddingInlineEnd: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      paddingInlineEnd: 'a',
      [MQ.D]: {
        paddingInlineEnd: 'b',
      },
      [MQ.T]: {
        paddingInlineEnd: 'c',
      },
      [MQ.M]: {
        paddingInlineEnd: 'd',
      },
    });
  });
});
