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

import { borderStyle } from '../borderStyle';

describe('borderStyle', () => {
  it('should return a function', () => {
    const result = borderStyle();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderStyle` as component and css prop', () => {
    const result = borderStyle()({ borderStyle: 'inherit' });
    expect(toStyles(result)).toEqual({ borderStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderStyle<'a'>()({ borderStyle: 'a' });
    expect(toStyles(result)).toEqual({ borderStyle: 'a' });
  });

  it('should use an interface which marks `borderStyle` as optional', () => {
    const result = borderStyle<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderStyle<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderStyle: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderStyle<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderStyle: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderStyle: 'a',
      [MQ.D]: {
        borderStyle: 'b',
      },
      [MQ.T]: {
        borderStyle: 'c',
      },
      [MQ.M]: {
        borderStyle: 'd',
      },
    });
  });
});
