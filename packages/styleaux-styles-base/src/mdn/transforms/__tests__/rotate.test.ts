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

import { createRotate } from '../rotate';

describe('rotate', () => {
  it('should return a function', () => {
    const result = createRotate();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `rotate` as component and css prop', () => {
    const result = createRotate()({ rotate: 'inherit' });
    expect(toStyles(result)).toEqual({ rotate: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createRotate<'a'>()({ rotate: 'a' });
    expect(toStyles(result)).toEqual({ rotate: 'a' });
  });

  it('should use an interface which marks `rotate` as optional', () => {
    const result = createRotate<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createRotate<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ rotate: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      rotate: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createRotate<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      rotate: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      rotate: 'a',
      [MQ.D]: {
        rotate: 'b',
      },
      [MQ.T]: {
        rotate: 'c',
      },
      [MQ.M]: {
        rotate: 'd',
      },
    });
  });
});
