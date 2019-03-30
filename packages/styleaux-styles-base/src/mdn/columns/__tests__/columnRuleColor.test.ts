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

import { columnRuleColor } from '../columnRuleColor';

describe('columnRuleColor', () => {
  it('should return a function', () => {
    const result = columnRuleColor();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `columnRuleColor` as component and css prop', () => {
    const result = columnRuleColor()({ columnRuleColor: 'inherit' });
    expect(toStyles(result)).toEqual({ columnRuleColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = columnRuleColor<'a'>()({ columnRuleColor: 'a' });
    expect(toStyles(result)).toEqual({ columnRuleColor: 'a' });
  });

  it('should use an interface which marks `columnRuleColor` as optional', () => {
    const result = columnRuleColor<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = columnRuleColor<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ columnRuleColor: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      columnRuleColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = columnRuleColor<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      columnRuleColor: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      columnRuleColor: 'a',
      [MQ.D]: {
        columnRuleColor: 'b',
      },
      [MQ.T]: {
        columnRuleColor: 'c',
      },
      [MQ.M]: {
        columnRuleColor: 'd',
      },
    });
  });
});
