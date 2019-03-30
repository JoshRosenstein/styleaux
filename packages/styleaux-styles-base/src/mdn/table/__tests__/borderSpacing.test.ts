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

import { borderSpacing } from '../borderSpacing';

describe('borderSpacing', () => {
  it('should return a function', () => {
    const result = borderSpacing();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderSpacing` as component and css prop', () => {
    const result = borderSpacing()({ borderSpacing: 'inherit' });
    expect(toStyles(result)).toEqual({ borderSpacing: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderSpacing<'a'>()({ borderSpacing: 'a' });
    expect(toStyles(result)).toEqual({ borderSpacing: 'a' });
  });

  it('should use an interface which marks `borderSpacing` as optional', () => {
    const result = borderSpacing<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderSpacing<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderSpacing: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderSpacing: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderSpacing<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderSpacing: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderSpacing: 'a',
      [MQ.D]: {
        borderSpacing: 'b',
      },
      [MQ.T]: {
        borderSpacing: 'c',
      },
      [MQ.M]: {
        borderSpacing: 'd',
      },
    });
  });
});