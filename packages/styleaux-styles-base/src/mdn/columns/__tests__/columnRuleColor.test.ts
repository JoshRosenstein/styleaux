import { createColumnRuleColor } from '../columnRuleColor';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createColumnRuleColor', () => {
  it('should return a function', () => {
    const result = createColumnRuleColor();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createColumnRuleColor` as component and css prop', () => {
    const result = createColumnRuleColor()({ columnRuleColor: 'inherit' });
    expect(toStyles(result)).toEqual({ columnRuleColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createColumnRuleColor<'a'>()({ columnRuleColor: 'a' });
    expect(toStyles(result)).toEqual({ columnRuleColor: 'a' });
  });

  it('should use an interface which marks `createColumnRuleColor` as optional', () => {
    const result = createColumnRuleColor<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createColumnRuleColor<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ columnRuleColor: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      columnRuleColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createColumnRuleColor<
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
