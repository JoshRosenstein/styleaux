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

import { maskClip } from '../maskClip';

describe('maskClip', () => {
  it('should return a function', () => {
    const result = maskClip();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `maskClip` as component and css prop', () => {
    const result = maskClip()({ maskClip: 'inherit' });
    expect(toStyles(result)).toEqual({ maskClip: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = maskClip<'a'>()({ maskClip: 'a' });
    expect(toStyles(result)).toEqual({ maskClip: 'a' });
  });

  it('should use an interface which marks `maskClip` as optional', () => {
    const result = maskClip<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = maskClip<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ maskClip: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      maskClip: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = maskClip<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      maskClip: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      maskClip: 'a',
      [MQ.D]: {
        maskClip: 'b',
      },
      [MQ.T]: {
        maskClip: 'c',
      },
      [MQ.M]: {
        maskClip: 'd',
      },
    });
  });
});
