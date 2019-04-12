import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createColumnRuleWidth } from '../columnRuleWidth';

describe('createColumnRuleWidth', () => {
  it('should return a function', () => {
    const result = createColumnRuleWidth();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createColumnRuleWidth` as component and css prop', () => {
    const result = createColumnRuleWidth()({ columnRuleWidth: 'inherit' });
    expect(toStyles(result)).toEqual({ columnRuleWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createColumnRuleWidth<'a'>()({ columnRuleWidth: 'a' });
    expect(toStyles(result)).toEqual({ columnRuleWidth: 'a' });
  });

  it('should use an interface which marks `createColumnRuleWidth` as optional', () => {
    const result = createColumnRuleWidth<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createColumnRuleWidth<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ columnRuleWidth: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      columnRuleWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createColumnRuleWidth<
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
