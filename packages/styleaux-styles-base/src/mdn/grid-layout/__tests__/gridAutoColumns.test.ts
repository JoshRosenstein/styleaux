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

import { gridAutoColumns } from '../gridAutoColumns';

describe('gridAutoColumns', () => {
  it('should return a function', () => {
    const result = gridAutoColumns();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `gridAutoColumns` as component and css prop', () => {
    const result = gridAutoColumns()({ gridAutoColumns: 'inherit' });
    expect(toStyles(result)).toEqual({ gridAutoColumns: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = gridAutoColumns<'a'>()({ gridAutoColumns: 'a' });
    expect(toStyles(result)).toEqual({ gridAutoColumns: 'a' });
  });

  it('should use an interface which marks `gridAutoColumns` as optional', () => {
    const result = gridAutoColumns<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = gridAutoColumns<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ gridAutoColumns: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      gridAutoColumns: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = gridAutoColumns<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      gridAutoColumns: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      gridAutoColumns: 'a',
      [MQ.D]: {
        gridAutoColumns: 'b',
      },
      [MQ.T]: {
        gridAutoColumns: 'c',
      },
      [MQ.M]: {
        gridAutoColumns: 'd',
      },
    });
  });
});
