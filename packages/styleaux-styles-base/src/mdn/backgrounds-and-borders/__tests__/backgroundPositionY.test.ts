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

import { createBackgroundPositionY } from '../backgroundPositionY';

describe('backgroundPositionY', () => {
  it('should return a function', () => {
    const result = createBackgroundPositionY();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `backgroundPositionY` as component and css prop', () => {
    const result = createBackgroundPositionY()({ backgroundPositionY: 'inherit' });
    expect(toStyles(result)).toEqual({ backgroundPositionY: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBackgroundPositionY<'a'>()({ backgroundPositionY: 'a' });
    expect(toStyles(result)).toEqual({ backgroundPositionY: 'a' });
  });

  it('should use an interface which marks `backgroundPositionY` as optional', () => {
    const result = createBackgroundPositionY<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createBackgroundPositionY<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ backgroundPositionY: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      backgroundPositionY: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBackgroundPositionY<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      backgroundPositionY: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      backgroundPositionY: 'a',
      [MQ.D]: {
        backgroundPositionY: 'b',
      },
      [MQ.T]: {
        backgroundPositionY: 'c',
      },
      [MQ.M]: {
        backgroundPositionY: 'd',
      },
    });
  });
});
