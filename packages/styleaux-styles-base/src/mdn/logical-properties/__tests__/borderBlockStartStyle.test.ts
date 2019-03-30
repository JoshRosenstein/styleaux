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

import { borderBlockStartStyle } from '../borderBlockStartStyle';

describe('borderBlockStartStyle', () => {
  it('should return a function', () => {
    const result = borderBlockStartStyle();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderBlockStartStyle` as component and css prop', () => {
    const result = borderBlockStartStyle()({ borderBlockStartStyle: 'inherit' });
    expect(toStyles(result)).toEqual({ borderBlockStartStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBlockStartStyle<'a'>()({ borderBlockStartStyle: 'a' });
    expect(toStyles(result)).toEqual({ borderBlockStartStyle: 'a' });
  });

  it('should use an interface which marks `borderBlockStartStyle` as optional', () => {
    const result = borderBlockStartStyle<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderBlockStartStyle<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderBlockStartStyle: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderBlockStartStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBlockStartStyle<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderBlockStartStyle: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderBlockStartStyle: 'a',
      [MQ.D]: {
        borderBlockStartStyle: 'b',
      },
      [MQ.T]: {
        borderBlockStartStyle: 'c',
      },
      [MQ.M]: {
        borderBlockStartStyle: 'd',
      },
    });
  });
});
