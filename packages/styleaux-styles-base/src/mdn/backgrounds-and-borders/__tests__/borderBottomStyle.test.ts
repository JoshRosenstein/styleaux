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

import { createBorderBottomStyle } from '../borderBottomStyle';

describe('borderBottomStyle', () => {
  it('should return a function', () => {
    const result = createBorderBottomStyle();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderBottomStyle` as component and css prop', () => {
    const result = createBorderBottomStyle()({ borderBottomStyle: 'inherit' });
    expect(toStyles(result)).toEqual({ borderBottomStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderBottomStyle<'a'>()({ borderBottomStyle: 'a' });
    expect(toStyles(result)).toEqual({ borderBottomStyle: 'a' });
  });

  it('should use an interface which marks `borderBottomStyle` as optional', () => {
    const result = createBorderBottomStyle<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createBorderBottomStyle<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderBottomStyle: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderBottomStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderBottomStyle<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderBottomStyle: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderBottomStyle: 'a',
      [MQ.D]: {
        borderBottomStyle: 'b',
      },
      [MQ.T]: {
        borderBottomStyle: 'c',
      },
      [MQ.M]: {
        borderBottomStyle: 'd',
      },
    });
  });
});
