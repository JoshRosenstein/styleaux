import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createBackgroundBlendMode } from '../backgroundBlendMode';

describe('createBackgroundBlendMode', () => {
  it('should return a function', () => {
    const result = createBackgroundBlendMode();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBackgroundBlendMode` as component and css prop', () => {
    const result = createBackgroundBlendMode()({ backgroundBlendMode: 'inherit' });
    expect(toStyles(result)).toEqual({ backgroundBlendMode: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBackgroundBlendMode<'a'>()({ backgroundBlendMode: 'a' });
    expect(toStyles(result)).toEqual({ backgroundBlendMode: 'a' });
  });

  it('should use an interface which marks `createBackgroundBlendMode` as optional', () => {
    const result = createBackgroundBlendMode<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBackgroundBlendMode<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ backgroundBlendMode: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      backgroundBlendMode: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBackgroundBlendMode<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      backgroundBlendMode: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      backgroundBlendMode: 'a',
      [MQ.D]: {
        backgroundBlendMode: 'b',
      },
      [MQ.T]: {
        backgroundBlendMode: 'c',
      },
      [MQ.M]: {
        backgroundBlendMode: 'd',
      },
    });
  });
});
