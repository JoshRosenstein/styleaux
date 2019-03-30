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

import { columnSpan } from '../columnSpan';

describe('columnSpan', () => {
  it('should return a function', () => {
    const result = columnSpan();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `columnSpan` as component and css prop', () => {
    const result = columnSpan()({ columnSpan: 'inherit' });
    expect(toStyles(result)).toEqual({ columnSpan: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = columnSpan<'a'>()({ columnSpan: 'a' });
    expect(toStyles(result)).toEqual({ columnSpan: 'a' });
  });

  it('should use an interface which marks `columnSpan` as optional', () => {
    const result = columnSpan<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = columnSpan<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ columnSpan: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      columnSpan: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = columnSpan<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      columnSpan: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      columnSpan: 'a',
      [MQ.D]: {
        columnSpan: 'b',
      },
      [MQ.T]: {
        columnSpan: 'c',
      },
      [MQ.M]: {
        columnSpan: 'd',
      },
    });
  });
});
