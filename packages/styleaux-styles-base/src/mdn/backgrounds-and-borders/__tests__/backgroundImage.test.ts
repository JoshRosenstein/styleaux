import { createBackgroundImage } from '../backgroundImage';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createBackgroundImage', () => {
  it('should return a function', () => {
    const result = createBackgroundImage();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBackgroundImage` as component and css prop', () => {
    const result = createBackgroundImage()({ backgroundImage: 'inherit' });
    expect(toStyles(result)).toEqual({ backgroundImage: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBackgroundImage<'a'>()({ backgroundImage: 'a' });
    expect(toStyles(result)).toEqual({ backgroundImage: 'a' });
  });

  it('should use an interface which marks `createBackgroundImage` as optional', () => {
    const result = createBackgroundImage<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBackgroundImage<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ backgroundImage: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      backgroundImage: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBackgroundImage<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      backgroundImage: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      backgroundImage: 'a',
      [MQ.D]: {
        backgroundImage: 'b',
      },
      [MQ.T]: {
        backgroundImage: 'c',
      },
      [MQ.M]: {
        backgroundImage: 'd',
      },
    });
  });
});
