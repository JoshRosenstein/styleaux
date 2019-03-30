import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ
} from '../../../__testutils__/theme';
import {
toStyles
} from '../../../__testutils__/toStyles';

import { imageRendering } from '../imageRendering';

describe('imageRendering', () => {
  it('should return a function', () => {
    const result = imageRendering();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `imageRendering` as component and css prop', () => {
    const result = imageRendering()({ imageRendering: 'inherit' });
    expect(toStyles(result)).toEqual({ imageRendering: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = imageRendering<'a'>()({ imageRendering: 'a' });
    expect(toStyles(result)).toEqual({ imageRendering: 'a' });
  });

  it('should use an interface which marks `imageRendering` as optional', () => {
    const result = imageRendering<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = imageRendering<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ imageRendering: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      imageRendering: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = imageRendering<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      imageRendering: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      imageRendering: 'a',
      [MQ.D]: {
        imageRendering: 'b',
      },
      [MQ.T]: {
        imageRendering: 'c',
      },
      [MQ.M]: {
        imageRendering: 'd',
      },
    });
  });
});
