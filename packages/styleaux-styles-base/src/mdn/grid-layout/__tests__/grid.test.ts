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

import { grid } from '../grid';

describe('grid', () => {
  it('should return a function', () => {
    const result = grid();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `grid` as component and css prop', () => {
    const result = grid()({ grid: 'inherit' });
    expect(toStyles(result)).toEqual({ grid: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = grid<'a'>()({ grid: 'a' });
    expect(toStyles(result)).toEqual({ grid: 'a' });
  });

  it('should use an interface which marks `grid` as optional', () => {
    const result = grid<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = grid<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ grid: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      grid: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = grid<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      grid: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      grid: 'a',
      [MQ.D]: {
        grid: 'b',
      },
      [MQ.T]: {
        grid: 'c',
      },
      [MQ.M]: {
        grid: 'd',
      },
    });
  });
});
