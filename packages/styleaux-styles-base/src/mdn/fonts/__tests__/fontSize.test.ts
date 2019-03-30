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

import { fontSize } from '../fontSize';

describe('fontSize', () => {
  it('should return a function', () => {
    const result = fontSize();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `fontSize` as component and css prop', () => {
    const result = fontSize()({ fontSize: 'inherit' });
    expect(toStyles(result)).toEqual({ fontSize: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = fontSize<'a'>()({ fontSize: 'a' });
    expect(toStyles(result)).toEqual({ fontSize: 'a' });
  });

  it('should use an interface which marks `fontSize` as optional', () => {
    const result = fontSize<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = fontSize<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ fontSize: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      fontSize: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = fontSize<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      fontSize: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      fontSize: 'a',
      [MQ.D]: {
        fontSize: 'b',
      },
      [MQ.T]: {
        fontSize: 'c',
      },
      [MQ.M]: {
        fontSize: 'd',
      },
    });
  });
});
