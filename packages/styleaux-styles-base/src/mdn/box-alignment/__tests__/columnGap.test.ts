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

import { columnGap } from '../columnGap';

describe('columnGap', () => {
  it('should return a function', () => {
    const result = columnGap();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `columnGap` as component and css prop', () => {
    const result = columnGap()({ columnGap: 'inherit' });
    expect(toStyles(result)).toEqual({ columnGap: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = columnGap<'a'>()({ columnGap: 'a' });
    expect(toStyles(result)).toEqual({ columnGap: 'a' });
  });

  it('should use an interface which marks `columnGap` as optional', () => {
    const result = columnGap<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = columnGap<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ columnGap: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      columnGap: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = columnGap<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      columnGap: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      columnGap: 'a',
      [MQ.D]: {
        columnGap: 'b',
      },
      [MQ.T]: {
        columnGap: 'c',
      },
      [MQ.M]: {
        columnGap: 'd',
      },
    });
  });
});
