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

import { mixBlendMode } from '../mixBlendMode';

describe('mixBlendMode', () => {
  it('should return a function', () => {
    const result = mixBlendMode();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `mixBlendMode` as component and css prop', () => {
    const result = mixBlendMode()({ mixBlendMode: 'inherit' });
    expect(toStyles(result)).toEqual({ mixBlendMode: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = mixBlendMode<'a'>()({ mixBlendMode: 'a' });
    expect(toStyles(result)).toEqual({ mixBlendMode: 'a' });
  });

  it('should use an interface which marks `mixBlendMode` as optional', () => {
    const result = mixBlendMode<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = mixBlendMode<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ mixBlendMode: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      mixBlendMode: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = mixBlendMode<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      mixBlendMode: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      mixBlendMode: 'a',
      [MQ.D]: {
        mixBlendMode: 'b',
      },
      [MQ.T]: {
        mixBlendMode: 'c',
      },
      [MQ.M]: {
        mixBlendMode: 'd',
      },
    });
  });
});
