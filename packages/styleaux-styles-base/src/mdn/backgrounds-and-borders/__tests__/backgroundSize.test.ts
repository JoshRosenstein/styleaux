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

import { backgroundSize } from '../backgroundSize';

describe('backgroundSize', () => {
  it('should return a function', () => {
    const result = backgroundSize();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `backgroundSize` as component and css prop', () => {
    const result = backgroundSize()({ backgroundSize: 'inherit' });
    expect(toStyles(result)).toEqual({ backgroundSize: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = backgroundSize<'a'>()({ backgroundSize: 'a' });
    expect(toStyles(result)).toEqual({ backgroundSize: 'a' });
  });

  it('should use an interface which marks `backgroundSize` as optional', () => {
    const result = backgroundSize<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = backgroundSize<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ backgroundSize: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      backgroundSize: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = backgroundSize<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      backgroundSize: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      backgroundSize: 'a',
      [MQ.D]: {
        backgroundSize: 'b',
      },
      [MQ.T]: {
        backgroundSize: 'c',
      },
      [MQ.M]: {
        backgroundSize: 'd',
      },
    });
  });
});
