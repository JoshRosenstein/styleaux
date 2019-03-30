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

import { columnRule } from '../columnRule';

describe('columnRule', () => {
  it('should return a function', () => {
    const result = columnRule();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `columnRule` as component and css prop', () => {
    const result = columnRule()({ columnRule: 'inherit' });
    expect(toStyles(result)).toEqual({ columnRule: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = columnRule<'a'>()({ columnRule: 'a' });
    expect(toStyles(result)).toEqual({ columnRule: 'a' });
  });

  it('should use an interface which marks `columnRule` as optional', () => {
    const result = columnRule<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = columnRule<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ columnRule: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      columnRule: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = columnRule<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      columnRule: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      columnRule: 'a',
      [MQ.D]: {
        columnRule: 'b',
      },
      [MQ.T]: {
        columnRule: 'c',
      },
      [MQ.M]: {
        columnRule: 'd',
      },
    });
  });
});
