import { createBorderInlineEndWidth } from '../borderInlineEndWidth';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createBorderInlineEndWidth', () => {
  it('should return a function', () => {
    const result = createBorderInlineEndWidth();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBorderInlineEndWidth` as component and css prop', () => {
    const result = createBorderInlineEndWidth()({
      borderInlineEndWidth: 'inherit',
    });
    expect(toStyles(result)).toEqual({ borderInlineEndWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderInlineEndWidth<'a'>()({
      borderInlineEndWidth: 'a',
    });
    expect(toStyles(result)).toEqual({ borderInlineEndWidth: 'a' });
  });

  it('should use an interface which marks `createBorderInlineEndWidth` as optional', () => {
    const result = createBorderInlineEndWidth<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBorderInlineEndWidth<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ borderInlineEndWidth: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderInlineEndWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderInlineEndWidth<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      borderInlineEndWidth: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderInlineEndWidth: 'a',
      [MQ.D]: {
        borderInlineEndWidth: 'b',
      },
      [MQ.T]: {
        borderInlineEndWidth: 'c',
      },
      [MQ.M]: {
        borderInlineEndWidth: 'd',
      },
    });
  });
});
