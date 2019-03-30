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

import { appearance } from '../appearance';

describe('appearance', () => {
  it('should return a function', () => {
    const result = appearance();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `appearance` as component and css prop', () => {
    const result = appearance()({ appearance: 'inherit' });
    expect(toStyles(result)).toEqual({ appearance: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = appearance<'a'>()({ appearance: 'a' });
    expect(toStyles(result)).toEqual({ appearance: 'a' });
  });

  it('should use an interface which marks `appearance` as optional', () => {
    const result = appearance<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = appearance<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ appearance: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      appearance: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = appearance<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      appearance: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      appearance: 'a',
      [MQ.D]: {
        appearance: 'b',
      },
      [MQ.T]: {
        appearance: 'c',
      },
      [MQ.M]: {
        appearance: 'd',
      },
    });
  });
});
