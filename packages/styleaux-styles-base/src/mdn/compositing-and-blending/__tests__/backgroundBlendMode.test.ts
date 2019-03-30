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

import { backgroundBlendMode } from '../backgroundBlendMode';

describe('backgroundBlendMode', () => {
  it('should return a function', () => {
    const result = backgroundBlendMode();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `backgroundBlendMode` as component and css prop', () => {
    const result = backgroundBlendMode()({ backgroundBlendMode: 'inherit' });
    expect(toStyles(result)).toEqual({ backgroundBlendMode: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = backgroundBlendMode<'a'>()({ backgroundBlendMode: 'a' });
    expect(toStyles(result)).toEqual({ backgroundBlendMode: 'a' });
  });

  it('should use an interface which marks `backgroundBlendMode` as optional', () => {
    const result = backgroundBlendMode<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = backgroundBlendMode<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ backgroundBlendMode: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      backgroundBlendMode: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = backgroundBlendMode<
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
