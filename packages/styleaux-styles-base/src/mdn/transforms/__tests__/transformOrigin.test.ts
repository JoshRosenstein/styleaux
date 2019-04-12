import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createTransformOrigin } from '../transformOrigin';

describe('createTransformOrigin', () => {
  it('should return a function', () => {
    const result = createTransformOrigin();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createTransformOrigin` as component and css prop', () => {
    const result = createTransformOrigin()({ transformOrigin: 'inherit' });
    expect(toStyles(result)).toEqual({ transformOrigin: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createTransformOrigin<'a'>()({ transformOrigin: 'a' });
    expect(toStyles(result)).toEqual({ transformOrigin: 'a' });
  });

  it('should use an interface which marks `createTransformOrigin` as optional', () => {
    const result = createTransformOrigin<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createTransformOrigin<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ transformOrigin: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      transformOrigin: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createTransformOrigin<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      transformOrigin: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      transformOrigin: 'a',
      [MQ.D]: {
        transformOrigin: 'b',
      },
      [MQ.T]: {
        transformOrigin: 'c',
      },
      [MQ.M]: {
        transformOrigin: 'd',
      },
    });
  });
});
