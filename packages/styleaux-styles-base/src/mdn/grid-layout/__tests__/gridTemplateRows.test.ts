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

import { createGridTemplateRows } from '../gridTemplateRows';

describe('gridTemplateRows', () => {
  it('should return a function', () => {
    const result = createGridTemplateRows();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `gridTemplateRows` as component and css prop', () => {
    const result = createGridTemplateRows()({ gridTemplateRows: 'inherit' });
    expect(toStyles(result)).toEqual({ gridTemplateRows: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createGridTemplateRows<'a'>()({ gridTemplateRows: 'a' });
    expect(toStyles(result)).toEqual({ gridTemplateRows: 'a' });
  });

  it('should use an interface which marks `gridTemplateRows` as optional', () => {
    const result = createGridTemplateRows<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createGridTemplateRows<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ gridTemplateRows: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      gridTemplateRows: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createGridTemplateRows<
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
