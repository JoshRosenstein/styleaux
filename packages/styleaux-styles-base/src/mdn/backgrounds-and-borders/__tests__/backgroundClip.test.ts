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

import { backgroundClip } from '../backgroundClip';

describe('backgroundClip', () => {
  it('should return a function', () => {
    const result = backgroundClip();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `backgroundClip` as component and css prop', () => {
    const result = backgroundClip()({ backgroundClip: 'inherit' });
    expect(toStyles(result)).toEqual({ backgroundClip: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = backgroundClip<'a'>()({ backgroundClip: 'a' });
    expect(toStyles(result)).toEqual({ backgroundClip: 'a' });
  });

  it('should use an interface which marks `backgroundClip` as optional', () => {
    const result = backgroundClip<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = backgroundClip<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ backgroundClip: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      backgroundClip: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = backgroundClip<
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
