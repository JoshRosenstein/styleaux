import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createTextOrientation } from '../textOrientation';

describe('createTextOrientation', () => {
  it('should return a function', () => {
    const result = createTextOrientation();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createTextOrientation` as component and css prop', () => {
    const result = createTextOrientation()({ textOrientation: 'inherit' });
    expect(toStyles(result)).toEqual({ textOrientation: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createTextOrientation<'a'>()({ textOrientation: 'a' });
    expect(toStyles(result)).toEqual({ textOrientation: 'a' });
  });

  it('should use an interface which marks `createTextOrientation` as optional', () => {
    const result = createTextOrientation<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createTextOrientation<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ textOrientation: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      textOrientation: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createTextOrientation<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      textOrientation: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      textOrientation: 'a',
      [MQ.D]: {
        textOrientation: 'b',
      },
      [MQ.T]: {
        textOrientation: 'c',
      },
      [MQ.M]: {
        textOrientation: 'd',
      },
    });
  });
});
