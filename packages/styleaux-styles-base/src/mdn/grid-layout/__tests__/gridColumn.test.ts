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

import { createGridColumn } from '../gridColumn';

describe('gridColumn', () => {
  it('should return a function', () => {
    const result = createGridColumn();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `gridColumn` as component and css prop', () => {
    const result = createGridColumn()({ gridColumn: 'inherit' });
    expect(toStyles(result)).toEqual({ gridColumn: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createGridColumn<'a'>()({ gridColumn: 'a' });
    expect(toStyles(result)).toEqual({ gridColumn: 'a' });
  });

  it('should use an interface which marks `gridColumn` as optional', () => {
    const result = createGridColumn<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createGridColumn<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ gridColumn: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      gridColumn: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createGridColumn<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      gridColumn: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      gridColumn: 'a',
      [MQ.D]: {
        gridColumn: 'b',
      },
      [MQ.T]: {
        gridColumn: 'c',
      },
      [MQ.M]: {
        gridColumn: 'd',
      },
    });
  });
});
