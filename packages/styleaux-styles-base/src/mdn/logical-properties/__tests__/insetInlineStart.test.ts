import { createInsetInlineStart } from '../insetInlineStart';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createInsetInlineStart', () => {
  it('should return a function', () => {
    const result = createInsetInlineStart();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createInsetInlineStart` as component and css prop', () => {
    const result = createInsetInlineStart()({ insetInlineStart: 'inherit' });
    expect(toStyles(result)).toEqual({ insetInlineStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createInsetInlineStart<'a'>()({ insetInlineStart: 'a' });
    expect(toStyles(result)).toEqual({ insetInlineStart: 'a' });
  });

  it('should use an interface which marks `createInsetInlineStart` as optional', () => {
    const result = createInsetInlineStart<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createInsetInlineStart<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ insetInlineStart: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      insetInlineStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createInsetInlineStart<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      insetInlineStart: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      insetInlineStart: 'a',
      [MQ.D]: {
        insetInlineStart: 'b',
      },
      [MQ.T]: {
        insetInlineStart: 'c',
      },
      [MQ.M]: {
        insetInlineStart: 'd',
      },
    });
  });
});
