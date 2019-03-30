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

import { gridRowStart } from '../gridRowStart';

describe('gridRowStart', () => {
  it('should return a function', () => {
    const result = gridRowStart();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `gridRowStart` as component and css prop', () => {
    const result = gridRowStart()({ gridRowStart: 'inherit' });
    expect(toStyles(result)).toEqual({ gridRowStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = gridRowStart<'a'>()({ gridRowStart: 'a' });
    expect(toStyles(result)).toEqual({ gridRowStart: 'a' });
  });

  it('should use an interface which marks `gridRowStart` as optional', () => {
    const result = gridRowStart<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = gridRowStart<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ gridRowStart: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      gridRowStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = gridRowStart<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      gridRowStart: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      gridRowStart: 'a',
      [MQ.D]: {
        gridRowStart: 'b',
      },
      [MQ.T]: {
        gridRowStart: 'c',
      },
      [MQ.M]: {
        gridRowStart: 'd',
      },
    });
  });
});
