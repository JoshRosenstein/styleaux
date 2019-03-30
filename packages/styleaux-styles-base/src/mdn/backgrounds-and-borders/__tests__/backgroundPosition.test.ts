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

import { backgroundPosition } from '../backgroundPosition';

describe('backgroundPosition', () => {
  it('should return a function', () => {
    const result = backgroundPosition();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `backgroundPosition` as component and css prop', () => {
    const result = backgroundPosition()({ backgroundPosition: 'inherit' });
    expect(toStyles(result)).toEqual({ backgroundPosition: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = backgroundPosition<'a'>()({ backgroundPosition: 'a' });
    expect(toStyles(result)).toEqual({ backgroundPosition: 'a' });
  });

  it('should use an interface which marks `backgroundPosition` as optional', () => {
    const result = backgroundPosition<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = backgroundPosition<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ backgroundPosition: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      backgroundPosition: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = backgroundPosition<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      backgroundPosition: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      backgroundPosition: 'a',
      [MQ.D]: {
        backgroundPosition: 'b',
      },
      [MQ.T]: {
        backgroundPosition: 'c',
      },
      [MQ.M]: {
        backgroundPosition: 'd',
      },
    });
  });
});
