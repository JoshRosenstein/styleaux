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

import { gridRow } from '../gridRow';

describe('gridRow', () => {
  it('should return a function', () => {
    const result = gridRow();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `gridRow` as component and css prop', () => {
    const result = gridRow()({ gridRow: 'inherit' });
    expect(toStyles(result)).toEqual({ gridRow: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = gridRow<'a'>()({ gridRow: 'a' });
    expect(toStyles(result)).toEqual({ gridRow: 'a' });
  });

  it('should use an interface which marks `gridRow` as optional', () => {
    const result = gridRow<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = gridRow<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ gridRow: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      gridRow: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = gridRow<
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
