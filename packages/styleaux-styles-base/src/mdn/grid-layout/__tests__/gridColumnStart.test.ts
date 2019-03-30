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

import { gridColumnStart } from '../gridColumnStart';

describe('gridColumnStart', () => {
  it('should return a function', () => {
    const result = gridColumnStart();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `gridColumnStart` as component and css prop', () => {
    const result = gridColumnStart()({ gridColumnStart: 'inherit' });
    expect(toStyles(result)).toEqual({ gridColumnStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = gridColumnStart<'a'>()({ gridColumnStart: 'a' });
    expect(toStyles(result)).toEqual({ gridColumnStart: 'a' });
  });

  it('should use an interface which marks `gridColumnStart` as optional', () => {
    const result = gridColumnStart<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = gridColumnStart<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ gridColumnStart: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      gridColumnStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = gridColumnStart<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      gridColumnStart: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      gridColumnStart: 'a',
      [MQ.D]: {
        gridColumnStart: 'b',
      },
      [MQ.T]: {
        gridColumnStart: 'c',
      },
      [MQ.M]: {
        gridColumnStart: 'd',
      },
    });
  });
});
