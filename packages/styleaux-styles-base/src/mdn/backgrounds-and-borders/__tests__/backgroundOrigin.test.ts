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

import { backgroundOrigin } from '../backgroundOrigin';

describe('backgroundOrigin', () => {
  it('should return a function', () => {
    const result = backgroundOrigin();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `backgroundOrigin` as component and css prop', () => {
    const result = backgroundOrigin()({ backgroundOrigin: 'inherit' });
    expect(toStyles(result)).toEqual({ backgroundOrigin: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = backgroundOrigin<'a'>()({ backgroundOrigin: 'a' });
    expect(toStyles(result)).toEqual({ backgroundOrigin: 'a' });
  });

  it('should use an interface which marks `backgroundOrigin` as optional', () => {
    const result = backgroundOrigin<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = backgroundOrigin<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ backgroundOrigin: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      backgroundOrigin: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = backgroundOrigin<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      backgroundOrigin: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      backgroundOrigin: 'a',
      [MQ.D]: {
        backgroundOrigin: 'b',
      },
      [MQ.T]: {
        backgroundOrigin: 'c',
      },
      [MQ.M]: {
        backgroundOrigin: 'd',
      },
    });
  });
});
