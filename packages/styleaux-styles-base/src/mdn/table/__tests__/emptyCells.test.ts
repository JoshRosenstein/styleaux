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

import { emptyCells } from '../emptyCells';

describe('emptyCells', () => {
  it('should return a function', () => {
    const result = emptyCells();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `emptyCells` as component and css prop', () => {
    const result = emptyCells()({ emptyCells: 'inherit' });
    expect(toStyles(result)).toEqual({ emptyCells: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = emptyCells<'a'>()({ emptyCells: 'a' });
    expect(toStyles(result)).toEqual({ emptyCells: 'a' });
  });

  it('should use an interface which marks `emptyCells` as optional', () => {
    const result = emptyCells<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = emptyCells<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ emptyCells: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      emptyCells: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = emptyCells<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      emptyCells: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      emptyCells: 'a',
      [MQ.D]: {
        emptyCells: 'b',
      },
      [MQ.T]: {
        emptyCells: 'c',
      },
      [MQ.M]: {
        emptyCells: 'd',
      },
    });
  });
});
