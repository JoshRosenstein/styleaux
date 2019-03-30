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

import { colorAdjust } from '../colorAdjust';

describe('colorAdjust', () => {
  it('should return a function', () => {
    const result = colorAdjust();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `colorAdjust` as component and css prop', () => {
    const result = colorAdjust()({ colorAdjust: 'inherit' });
    expect(toStyles(result)).toEqual({ colorAdjust: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = colorAdjust<'a'>()({ colorAdjust: 'a' });
    expect(toStyles(result)).toEqual({ colorAdjust: 'a' });
  });

  it('should use an interface which marks `colorAdjust` as optional', () => {
    const result = colorAdjust<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = colorAdjust<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ colorAdjust: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      colorAdjust: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = colorAdjust<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      colorAdjust: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      colorAdjust: 'a',
      [MQ.D]: {
        colorAdjust: 'b',
      },
      [MQ.T]: {
        colorAdjust: 'c',
      },
      [MQ.M]: {
        colorAdjust: 'd',
      },
    });
  });
});
