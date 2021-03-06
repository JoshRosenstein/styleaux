import { createBorderImageWidth } from '../borderImageWidth';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createBorderImageWidth', () => {
  it('should return a function', () => {
    const result = createBorderImageWidth();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBorderImageWidth` as component and css prop', () => {
    const result = createBorderImageWidth()({ borderImageWidth: 'inherit' });
    expect(toStyles(result)).toEqual({ borderImageWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderImageWidth<'a'>()({ borderImageWidth: 'a' });
    expect(toStyles(result)).toEqual({ borderImageWidth: 'a' });
  });

  it('should use an interface which marks `createBorderImageWidth` as optional', () => {
    const result = createBorderImageWidth<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBorderImageWidth<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ borderImageWidth: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderImageWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderImageWidth<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      borderImageWidth: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderImageWidth: 'a',
      [MQ.D]: {
        borderImageWidth: 'b',
      },
      [MQ.T]: {
        borderImageWidth: 'c',
      },
      [MQ.M]: {
        borderImageWidth: 'd',
      },
    });
  });
});
