import { createPaddingBlockStart } from '../paddingBlockStart';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createPaddingBlockStart', () => {
  it('should return a function', () => {
    const result = createPaddingBlockStart();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createPaddingBlockStart` as component and css prop', () => {
    const result = createPaddingBlockStart()({ paddingBlockStart: 'inherit' });
    expect(toStyles(result)).toEqual({ paddingBlockStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createPaddingBlockStart<'a'>()({ paddingBlockStart: 'a' });
    expect(toStyles(result)).toEqual({ paddingBlockStart: 'a' });
  });

  it('should use an interface which marks `createPaddingBlockStart` as optional', () => {
    const result = createPaddingBlockStart<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createPaddingBlockStart<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ paddingBlockStart: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      paddingBlockStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createPaddingBlockStart<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      paddingBlockStart: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      paddingBlockStart: 'a',
      [MQ.D]: {
        paddingBlockStart: 'b',
      },
      [MQ.T]: {
        paddingBlockStart: 'c',
      },
      [MQ.M]: {
        paddingBlockStart: 'd',
      },
    });
  });
});
