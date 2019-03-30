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

import { gridColumnEnd } from '../gridColumnEnd';

describe('gridColumnEnd', () => {
  it('should return a function', () => {
    const result = gridColumnEnd();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `gridColumnEnd` as component and css prop', () => {
    const result = gridColumnEnd()({ gridColumnEnd: 'inherit' });
    expect(toStyles(result)).toEqual({ gridColumnEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = gridColumnEnd<'a'>()({ gridColumnEnd: 'a' });
    expect(toStyles(result)).toEqual({ gridColumnEnd: 'a' });
  });

  it('should use an interface which marks `gridColumnEnd` as optional', () => {
    const result = gridColumnEnd<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = gridColumnEnd<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ gridColumnEnd: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      gridColumnEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = gridColumnEnd<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      gridColumnEnd: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      gridColumnEnd: 'a',
      [MQ.D]: {
        gridColumnEnd: 'b',
      },
      [MQ.T]: {
        gridColumnEnd: 'c',
      },
      [MQ.M]: {
        gridColumnEnd: 'd',
      },
    });
  });
});
