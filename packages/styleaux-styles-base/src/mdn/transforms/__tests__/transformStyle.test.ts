import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createTransformStyle } from '../transformStyle';

describe('createTransformStyle', () => {
  it('should return a function', () => {
    const result = createTransformStyle();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createTransformStyle` as component and css prop', () => {
    const result = createTransformStyle()({ transformStyle: 'inherit' });
    expect(toStyles(result)).toEqual({ transformStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createTransformStyle<'a'>()({ transformStyle: 'a' });
    expect(toStyles(result)).toEqual({ transformStyle: 'a' });
  });

  it('should use an interface which marks `createTransformStyle` as optional', () => {
    const result = createTransformStyle<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createTransformStyle<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ transformStyle: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      transformStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createTransformStyle<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      transformStyle: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      transformStyle: 'a',
      [MQ.D]: {
        transformStyle: 'b',
      },
      [MQ.T]: {
        transformStyle: 'c',
      },
      [MQ.M]: {
        transformStyle: 'd',
      },
    });
  });
});
