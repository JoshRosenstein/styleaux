import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createBackgroundClip } from '../backgroundClip';

describe('createBackgroundClip', () => {
  it('should return a function', () => {
    const result = createBackgroundClip();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBackgroundClip` as component and css prop', () => {
    const result = createBackgroundClip()({ backgroundClip: 'inherit' });
    expect(toStyles(result)).toEqual({ backgroundClip: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBackgroundClip<'a'>()({ backgroundClip: 'a' });
    expect(toStyles(result)).toEqual({ backgroundClip: 'a' });
  });

  it('should use an interface which marks `createBackgroundClip` as optional', () => {
    const result = createBackgroundClip<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBackgroundClip<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ backgroundClip: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      backgroundClip: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBackgroundClip<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      backgroundClip: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      backgroundClip: 'a',
      [MQ.D]: {
        backgroundClip: 'b',
      },
      [MQ.T]: {
        backgroundClip: 'c',
      },
      [MQ.M]: {
        backgroundClip: 'd',
      },
    });
  });
});
