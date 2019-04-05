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

import { createGridColumnStart } from '../gridColumnStart';

describe('gridColumnStart', () => {
  it('should return a function', () => {
    const result = createGridColumnStart();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `gridColumnStart` as component and css prop', () => {
    const result = createGridColumnStart()({ gridColumnStart: 'inherit' });
    expect(toStyles(result)).toEqual({ gridColumnStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createGridColumnStart<'a'>()({ gridColumnStart: 'a' });
    expect(toStyles(result)).toEqual({ gridColumnStart: 'a' });
  });

  it('should use an interface which marks `gridColumnStart` as optional', () => {
    const result = createGridColumnStart<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createGridColumnStart<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ gridColumnStart: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      gridColumnStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createGridColumnStart<
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
