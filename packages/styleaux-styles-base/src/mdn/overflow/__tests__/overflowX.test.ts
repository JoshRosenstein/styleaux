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

import { overflowX } from '../overflowX';

describe('overflowX', () => {
  it('should return a function', () => {
    const result = overflowX();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `overflowX` as component and css prop', () => {
    const result = overflowX()({ overflowX: 'inherit' });
    expect(toStyles(result)).toEqual({ overflowX: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = overflowX<'a'>()({ overflowX: 'a' });
    expect(toStyles(result)).toEqual({ overflowX: 'a' });
  });

  it('should use an interface which marks `overflowX` as optional', () => {
    const result = overflowX<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = overflowX<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ overflowX: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      overflowX: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = overflowX<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      overflowX: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      overflowX: 'a',
      [MQ.D]: {
        overflowX: 'b',
      },
      [MQ.T]: {
        overflowX: 'c',
      },
      [MQ.M]: {
        overflowX: 'd',
      },
    });
  });
});
