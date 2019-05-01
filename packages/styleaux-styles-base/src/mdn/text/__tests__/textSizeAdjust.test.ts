import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createTextSizeAdjust } from '../textSizeAdjust';

describe('createTextSizeAdjust', () => {
  it('should return a function', () => {
    const result = createTextSizeAdjust();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createTextSizeAdjust` as component and css prop', () => {
    const result = createTextSizeAdjust()({ textSizeAdjust: 'inherit' });
    expect(toStyles(result)).toEqual({ textSizeAdjust: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createTextSizeAdjust<'a'>()({ textSizeAdjust: 'a' });
    expect(toStyles(result)).toEqual({ textSizeAdjust: 'a' });
  });

  it('should use an interface which marks `createTextSizeAdjust` as optional', () => {
    const result = createTextSizeAdjust<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createTextSizeAdjust<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ textSizeAdjust: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      textSizeAdjust: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createTextSizeAdjust<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      textSizeAdjust: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      textSizeAdjust: 'a',
      [MQ.D]: {
        textSizeAdjust: 'b',
      },
      [MQ.T]: {
        textSizeAdjust: 'c',
      },
      [MQ.M]: {
        textSizeAdjust: 'd',
      },
    });
  });
});
