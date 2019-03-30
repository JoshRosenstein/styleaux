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

import { transformOrigin } from '../transformOrigin';

describe('transformOrigin', () => {
  it('should return a function', () => {
    const result = transformOrigin();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `transformOrigin` as component and css prop', () => {
    const result = transformOrigin()({ transformOrigin: 'inherit' });
    expect(toStyles(result)).toEqual({ transformOrigin: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = transformOrigin<'a'>()({ transformOrigin: 'a' });
    expect(toStyles(result)).toEqual({ transformOrigin: 'a' });
  });

  it('should use an interface which marks `transformOrigin` as optional', () => {
    const result = transformOrigin<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = transformOrigin<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ transformOrigin: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      transformOrigin: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = transformOrigin<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      transformOrigin: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      transformOrigin: 'a',
      [MQ.D]: {
        transformOrigin: 'b',
      },
      [MQ.T]: {
        transformOrigin: 'c',
      },
      [MQ.M]: {
        transformOrigin: 'd',
      },
    });
  });
});
