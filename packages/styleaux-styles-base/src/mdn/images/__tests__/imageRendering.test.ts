import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createImageRendering } from '../imageRendering';

describe('createImageRendering', () => {
  it('should return a function', () => {
    const result = createImageRendering();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createImageRendering` as component and css prop', () => {
    const result = createImageRendering()({ imageRendering: 'inherit' });
    expect(toStyles(result)).toEqual({ imageRendering: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createImageRendering<'a'>()({ imageRendering: 'a' });
    expect(toStyles(result)).toEqual({ imageRendering: 'a' });
  });

  it('should use an interface which marks `createImageRendering` as optional', () => {
    const result = createImageRendering<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createImageRendering<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ imageRendering: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      imageRendering: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createImageRendering<
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
