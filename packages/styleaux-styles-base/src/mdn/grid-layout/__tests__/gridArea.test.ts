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

import { gridArea } from '../gridArea';

describe('gridArea', () => {
  it('should return a function', () => {
    const result = gridArea();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `gridArea` as component and css prop', () => {
    const result = gridArea()({ gridArea: 'inherit' });
    expect(toStyles(result)).toEqual({ gridArea: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = gridArea<'a'>()({ gridArea: 'a' });
    expect(toStyles(result)).toEqual({ gridArea: 'a' });
  });

  it('should use an interface which marks `gridArea` as optional', () => {
    const result = gridArea<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = gridArea<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ gridArea: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      gridArea: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = gridArea<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      gridArea: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      gridArea: 'a',
      [MQ.D]: {
        gridArea: 'b',
      },
      [MQ.T]: {
        gridArea: 'c',
      },
      [MQ.M]: {
        gridArea: 'd',
      },
    });
  });
});
