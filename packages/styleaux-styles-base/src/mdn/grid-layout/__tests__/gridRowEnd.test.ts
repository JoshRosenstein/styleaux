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

import { gridRowEnd } from '../gridRowEnd';

describe('gridRowEnd', () => {
  it('should return a function', () => {
    const result = gridRowEnd();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `gridRowEnd` as component and css prop', () => {
    const result = gridRowEnd()({ gridRowEnd: 'inherit' });
    expect(toStyles(result)).toEqual({ gridRowEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = gridRowEnd<'a'>()({ gridRowEnd: 'a' });
    expect(toStyles(result)).toEqual({ gridRowEnd: 'a' });
  });

  it('should use an interface which marks `gridRowEnd` as optional', () => {
    const result = gridRowEnd<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = gridRowEnd<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ gridRowEnd: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      gridRowEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = gridRowEnd<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      gridRowEnd: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      gridRowEnd: 'a',
      [MQ.D]: {
        gridRowEnd: 'b',
      },
      [MQ.T]: {
        gridRowEnd: 'c',
      },
      [MQ.M]: {
        gridRowEnd: 'd',
      },
    });
  });
});