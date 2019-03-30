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

import { columnRuleStyle } from '../columnRuleStyle';

describe('columnRuleStyle', () => {
  it('should return a function', () => {
    const result = columnRuleStyle();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `columnRuleStyle` as component and css prop', () => {
    const result = columnRuleStyle()({ columnRuleStyle: 'inherit' });
    expect(toStyles(result)).toEqual({ columnRuleStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = columnRuleStyle<'a'>()({ columnRuleStyle: 'a' });
    expect(toStyles(result)).toEqual({ columnRuleStyle: 'a' });
  });

  it('should use an interface which marks `columnRuleStyle` as optional', () => {
    const result = columnRuleStyle<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = columnRuleStyle<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ columnRuleStyle: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      columnRuleStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = columnRuleStyle<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      columnRuleStyle: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      columnRuleStyle: 'a',
      [MQ.D]: {
        columnRuleStyle: 'b',
      },
      [MQ.T]: {
        columnRuleStyle: 'c',
      },
      [MQ.M]: {
        columnRuleStyle: 'd',
      },
    });
  });
});
