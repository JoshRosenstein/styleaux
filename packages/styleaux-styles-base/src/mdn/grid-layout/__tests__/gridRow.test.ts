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

import { createGridRow } from '../gridRow';

describe('gridRow', () => {
  it('should return a function', () => {
    const result = createGridRow();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `gridRow` as component and css prop', () => {
    const result = createGridRow()({ gridRow: 'inherit' });
    expect(toStyles(result)).toEqual({ gridRow: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createGridRow<'a'>()({ gridRow: 'a' });
    expect(toStyles(result)).toEqual({ gridRow: 'a' });
  });

  it('should use an interface which marks `gridRow` as optional', () => {
    const result = createGridRow<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createGridRow<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ gridRow: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      gridRow: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createGridRow<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      gridRow: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      gridRow: 'a',
      [MQ.D]: {
        gridRow: 'b',
      },
      [MQ.T]: {
        gridRow: 'c',
      },
      [MQ.M]: {
        gridRow: 'd',
      },
    });
  });
});
