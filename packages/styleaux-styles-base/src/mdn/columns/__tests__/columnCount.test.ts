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

import { createColumnCount } from '../columnCount';

describe('columnCount', () => {
  it('should return a function', () => {
    const result = createColumnCount();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `columnCount` as component and css prop', () => {
    const result = createColumnCount()({ columnCount: 'inherit' });
    expect(toStyles(result)).toEqual({ columnCount: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createColumnCount<'a'>()({ columnCount: 'a' });
    expect(toStyles(result)).toEqual({ columnCount: 'a' });
  });

  it('should use an interface which marks `columnCount` as optional', () => {
    const result = createColumnCount<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createColumnCount<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ columnCount: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      columnCount: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createColumnCount<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      columnCount: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      columnCount: 'a',
      [MQ.D]: {
        columnCount: 'b',
      },
      [MQ.T]: {
        columnCount: 'c',
      },
      [MQ.M]: {
        columnCount: 'd',
      },
    });
  });
});
