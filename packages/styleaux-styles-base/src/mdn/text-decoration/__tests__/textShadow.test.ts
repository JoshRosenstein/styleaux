import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createTextShadow } from '../textShadow';

describe('createTextShadow', () => {
  it('should return a function', () => {
    const result = createTextShadow();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createTextShadow` as component and css prop', () => {
    const result = createTextShadow()({ textShadow: 'inherit' });
    expect(toStyles(result)).toEqual({ textShadow: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createTextShadow<'a'>()({ textShadow: 'a' });
    expect(toStyles(result)).toEqual({ textShadow: 'a' });
  });

  it('should use an interface which marks `createTextShadow` as optional', () => {
    const result = createTextShadow<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createTextShadow<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ textShadow: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      textShadow: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createTextShadow<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      textShadow: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      textShadow: 'a',
      [MQ.D]: {
        textShadow: 'b',
      },
      [MQ.T]: {
        textShadow: 'c',
      },
      [MQ.M]: {
        textShadow: 'd',
      },
    });
  });
});
