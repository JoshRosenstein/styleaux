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

import { createGridAutoColumns } from '../gridAutoColumns';

describe('gridAutoColumns', () => {
  it('should return a function', () => {
    const result = createGridAutoColumns();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `gridAutoColumns` as component and css prop', () => {
    const result = createGridAutoColumns()({ gridAutoColumns: 'inherit' });
    expect(toStyles(result)).toEqual({ gridAutoColumns: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createGridAutoColumns<'a'>()({ gridAutoColumns: 'a' });
    expect(toStyles(result)).toEqual({ gridAutoColumns: 'a' });
  });

  it('should use an interface which marks `gridAutoColumns` as optional', () => {
    const result = createGridAutoColumns<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createGridAutoColumns<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ gridAutoColumns: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      gridAutoColumns: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createGridAutoColumns<
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
