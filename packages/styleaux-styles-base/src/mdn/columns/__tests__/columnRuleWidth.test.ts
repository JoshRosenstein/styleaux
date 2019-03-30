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

import { columnRuleWidth } from '../columnRuleWidth';

describe('columnRuleWidth', () => {
  it('should return a function', () => {
    const result = columnRuleWidth();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `columnRuleWidth` as component and css prop', () => {
    const result = columnRuleWidth()({ columnRuleWidth: 'inherit' });
    expect(toStyles(result)).toEqual({ columnRuleWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = columnRuleWidth<'a'>()({ columnRuleWidth: 'a' });
    expect(toStyles(result)).toEqual({ columnRuleWidth: 'a' });
  });

  it('should use an interface which marks `columnRuleWidth` as optional', () => {
    const result = columnRuleWidth<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = columnRuleWidth<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ columnRuleWidth: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      columnRuleWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = columnRuleWidth<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      columnRuleWidth: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      columnRuleWidth: 'a',
      [MQ.D]: {
        columnRuleWidth: 'b',
      },
      [MQ.T]: {
        columnRuleWidth: 'c',
      },
      [MQ.M]: {
        columnRuleWidth: 'd',
      },
    });
  });
});
