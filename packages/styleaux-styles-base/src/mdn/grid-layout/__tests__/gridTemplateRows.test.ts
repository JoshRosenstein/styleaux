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

import { gridTemplateRows } from '../gridTemplateRows';

describe('gridTemplateRows', () => {
  it('should return a function', () => {
    const result = gridTemplateRows();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `gridTemplateRows` as component and css prop', () => {
    const result = gridTemplateRows()({ gridTemplateRows: 'inherit' });
    expect(toStyles(result)).toEqual({ gridTemplateRows: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = gridTemplateRows<'a'>()({ gridTemplateRows: 'a' });
    expect(toStyles(result)).toEqual({ gridTemplateRows: 'a' });
  });

  it('should use an interface which marks `gridTemplateRows` as optional', () => {
    const result = gridTemplateRows<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = gridTemplateRows<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ gridTemplateRows: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      gridTemplateRows: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = gridTemplateRows<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      gridTemplateRows: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      gridTemplateRows: 'a',
      [MQ.D]: {
        gridTemplateRows: 'b',
      },
      [MQ.T]: {
        gridTemplateRows: 'c',
      },
      [MQ.M]: {
        gridTemplateRows: 'd',
      },
    });
  });
});
