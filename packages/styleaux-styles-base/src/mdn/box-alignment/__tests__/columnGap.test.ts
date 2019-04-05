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

import { createColumnGap } from '../columnGap';

describe('columnGap', () => {
  it('should return a function', () => {
    const result = createColumnGap();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `columnGap` as component and css prop', () => {
    const result = createColumnGap()({ columnGap: 'inherit' });
    expect(toStyles(result)).toEqual({ columnGap: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createColumnGap<'a'>()({ columnGap: 'a' });
    expect(toStyles(result)).toEqual({ columnGap: 'a' });
  });

  it('should use an interface which marks `columnGap` as optional', () => {
    const result = createColumnGap<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createColumnGap<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ columnGap: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      columnGap: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createColumnGap<
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
