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

import { maskOrigin } from '../maskOrigin';

describe('maskOrigin', () => {
  it('should return a function', () => {
    const result = maskOrigin();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `maskOrigin` as component and css prop', () => {
    const result = maskOrigin()({ maskOrigin: 'inherit' });
    expect(toStyles(result)).toEqual({ maskOrigin: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = maskOrigin<'a'>()({ maskOrigin: 'a' });
    expect(toStyles(result)).toEqual({ maskOrigin: 'a' });
  });

  it('should use an interface which marks `maskOrigin` as optional', () => {
    const result = maskOrigin<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = maskOrigin<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ maskOrigin: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      maskOrigin: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = maskOrigin<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      maskOrigin: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      maskOrigin: 'a',
      [MQ.D]: {
        maskOrigin: 'b',
      },
      [MQ.T]: {
        maskOrigin: 'c',
      },
      [MQ.M]: {
        maskOrigin: 'd',
      },
    });
  });
});
