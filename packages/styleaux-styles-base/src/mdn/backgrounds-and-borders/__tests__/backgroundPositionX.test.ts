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

import { backgroundPositionX } from '../backgroundPositionX';

describe('backgroundPositionX', () => {
  it('should return a function', () => {
    const result = backgroundPositionX();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `backgroundPositionX` as component and css prop', () => {
    const result = backgroundPositionX()({ backgroundPositionX: 'inherit' });
    expect(toStyles(result)).toEqual({ backgroundPositionX: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = backgroundPositionX<'a'>()({ backgroundPositionX: 'a' });
    expect(toStyles(result)).toEqual({ backgroundPositionX: 'a' });
  });

  it('should use an interface which marks `backgroundPositionX` as optional', () => {
    const result = backgroundPositionX<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = backgroundPositionX<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ backgroundPositionX: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      backgroundPositionX: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = backgroundPositionX<
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
