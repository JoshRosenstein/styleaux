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

import { createGridAutoRows } from '../gridAutoRows';

describe('gridAutoRows', () => {
  it('should return a function', () => {
    const result = createGridAutoRows();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `gridAutoRows` as component and css prop', () => {
    const result = createGridAutoRows()({ gridAutoRows: 'inherit' });
    expect(toStyles(result)).toEqual({ gridAutoRows: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createGridAutoRows<'a'>()({ gridAutoRows: 'a' });
    expect(toStyles(result)).toEqual({ gridAutoRows: 'a' });
  });

  it('should use an interface which marks `gridAutoRows` as optional', () => {
    const result = createGridAutoRows<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createGridAutoRows<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ gridAutoRows: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      gridAutoRows: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createGridAutoRows<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      gridAutoRows: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      gridAutoRows: 'a',
      [MQ.D]: {
        gridAutoRows: 'b',
      },
      [MQ.T]: {
        gridAutoRows: 'c',
      },
      [MQ.M]: {
        gridAutoRows: 'd',
      },
    });
  });
});
