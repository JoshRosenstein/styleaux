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

import { backfaceVisibility } from '../backfaceVisibility';

describe('backfaceVisibility', () => {
  it('should return a function', () => {
    const result = backfaceVisibility();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `backfaceVisibility` as component and css prop', () => {
    const result = backfaceVisibility()({ backfaceVisibility: 'inherit' });
    expect(toStyles(result)).toEqual({ backfaceVisibility: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = backfaceVisibility<'a'>()({ backfaceVisibility: 'a' });
    expect(toStyles(result)).toEqual({ backfaceVisibility: 'a' });
  });

  it('should use an interface which marks `backfaceVisibility` as optional', () => {
    const result = backfaceVisibility<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = backfaceVisibility<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ backfaceVisibility: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      backfaceVisibility: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = backfaceVisibility<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      backfaceVisibility: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      backfaceVisibility: 'a',
      [MQ.D]: {
        backfaceVisibility: 'b',
      },
      [MQ.T]: {
        backfaceVisibility: 'c',
      },
      [MQ.M]: {
        backfaceVisibility: 'd',
      },
    });
  });
});
