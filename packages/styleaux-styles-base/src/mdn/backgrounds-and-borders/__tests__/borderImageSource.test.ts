import { createBorderImageSource } from '../borderImageSource';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createBorderImageSource', () => {
  it('should return a function', () => {
    const result = createBorderImageSource();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBorderImageSource` as component and css prop', () => {
    const result = createBorderImageSource()({ borderImageSource: 'inherit' });
    expect(toStyles(result)).toEqual({ borderImageSource: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderImageSource<'a'>()({ borderImageSource: 'a' });
    expect(toStyles(result)).toEqual({ borderImageSource: 'a' });
  });

  it('should use an interface which marks `createBorderImageSource` as optional', () => {
    const result = createBorderImageSource<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBorderImageSource<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ borderImageSource: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderImageSource: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderImageSource<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      borderImageSource: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderImageSource: 'a',
      [MQ.D]: {
        borderImageSource: 'b',
      },
      [MQ.T]: {
        borderImageSource: 'c',
      },
      [MQ.M]: {
        borderImageSource: 'd',
      },
    });
  });
});
