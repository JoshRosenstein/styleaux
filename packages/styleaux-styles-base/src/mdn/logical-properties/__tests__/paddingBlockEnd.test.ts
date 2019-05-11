import { createPaddingBlockEnd } from '../paddingBlockEnd';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createPaddingBlockEnd', () => {
  it('should return a function', () => {
    const result = createPaddingBlockEnd();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createPaddingBlockEnd` as component and css prop', () => {
    const result = createPaddingBlockEnd()({ paddingBlockEnd: 'inherit' });
    expect(toStyles(result)).toEqual({ paddingBlockEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createPaddingBlockEnd<'a'>()({ paddingBlockEnd: 'a' });
    expect(toStyles(result)).toEqual({ paddingBlockEnd: 'a' });
  });

  it('should use an interface which marks `createPaddingBlockEnd` as optional', () => {
    const result = createPaddingBlockEnd<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createPaddingBlockEnd<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ paddingBlockEnd: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      paddingBlockEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createPaddingBlockEnd<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      paddingBlockEnd: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      paddingBlockEnd: 'a',
      [MQ.D]: {
        paddingBlockEnd: 'b',
      },
      [MQ.T]: {
        paddingBlockEnd: 'c',
      },
      [MQ.M]: {
        paddingBlockEnd: 'd',
      },
    });
  });
});
