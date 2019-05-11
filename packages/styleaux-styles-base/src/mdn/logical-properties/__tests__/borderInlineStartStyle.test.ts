import { createBorderInlineStartStyle } from '../borderInlineStartStyle';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createBorderInlineStartStyle', () => {
  it('should return a function', () => {
    const result = createBorderInlineStartStyle();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBorderInlineStartStyle` as component and css prop', () => {
    const result = createBorderInlineStartStyle()({
      borderInlineStartStyle: 'inherit',
    });
    expect(toStyles(result)).toEqual({ borderInlineStartStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderInlineStartStyle<'a'>()({
      borderInlineStartStyle: 'a',
    });
    expect(toStyles(result)).toEqual({ borderInlineStartStyle: 'a' });
  });

  it('should use an interface which marks `createBorderInlineStartStyle` as optional', () => {
    const result = createBorderInlineStartStyle<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBorderInlineStartStyle<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ borderInlineStartStyle: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderInlineStartStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderInlineStartStyle<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      borderInlineStartStyle: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderInlineStartStyle: 'a',
      [MQ.D]: {
        borderInlineStartStyle: 'b',
      },
      [MQ.T]: {
        borderInlineStartStyle: 'c',
      },
      [MQ.M]: {
        borderInlineStartStyle: 'd',
      },
    });
  });
});
