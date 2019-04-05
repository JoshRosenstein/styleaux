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

import { createBackgroundPositionX } from '../backgroundPositionX';

describe('backgroundPositionX', () => {
  it('should return a function', () => {
    const result = createBackgroundPositionX();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `backgroundPositionX` as component and css prop', () => {
    const result = createBackgroundPositionX()({ backgroundPositionX: 'inherit' });
    expect(toStyles(result)).toEqual({ backgroundPositionX: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBackgroundPositionX<'a'>()({ backgroundPositionX: 'a' });
    expect(toStyles(result)).toEqual({ backgroundPositionX: 'a' });
  });

  it('should use an interface which marks `backgroundPositionX` as optional', () => {
    const result = createBackgroundPositionX<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createBackgroundPositionX<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ backgroundPositionX: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      backgroundPositionX: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBackgroundPositionX<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      backgroundPositionX: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      backgroundPositionX: 'a',
      [MQ.D]: {
        backgroundPositionX: 'b',
      },
      [MQ.T]: {
        backgroundPositionX: 'c',
      },
      [MQ.M]: {
        backgroundPositionX: 'd',
      },
    });
  });
});
