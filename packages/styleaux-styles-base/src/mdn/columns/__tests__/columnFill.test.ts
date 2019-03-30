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

import { columnFill } from '../columnFill';

describe('columnFill', () => {
  it('should return a function', () => {
    const result = columnFill();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `columnFill` as component and css prop', () => {
    const result = columnFill()({ columnFill: 'inherit' });
    expect(toStyles(result)).toEqual({ columnFill: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = columnFill<'a'>()({ columnFill: 'a' });
    expect(toStyles(result)).toEqual({ columnFill: 'a' });
  });

  it('should use an interface which marks `columnFill` as optional', () => {
    const result = columnFill<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = columnFill<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ columnFill: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      columnFill: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = columnFill<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      columnFill: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      columnFill: 'a',
      [MQ.D]: {
        columnFill: 'b',
      },
      [MQ.T]: {
        columnFill: 'c',
      },
      [MQ.M]: {
        columnFill: 'd',
      },
    });
  });
});
