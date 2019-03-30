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

import { outlineStyle } from '../outlineStyle';

describe('outlineStyle', () => {
  it('should return a function', () => {
    const result = outlineStyle();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `outlineStyle` as component and css prop', () => {
    const result = outlineStyle()({ outlineStyle: 'inherit' });
    expect(toStyles(result)).toEqual({ outlineStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = outlineStyle<'a'>()({ outlineStyle: 'a' });
    expect(toStyles(result)).toEqual({ outlineStyle: 'a' });
  });

  it('should use an interface which marks `outlineStyle` as optional', () => {
    const result = outlineStyle<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = outlineStyle<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ outlineStyle: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      outlineStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = outlineStyle<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      outlineStyle: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      outlineStyle: 'a',
      [MQ.D]: {
        outlineStyle: 'b',
      },
      [MQ.T]: {
        outlineStyle: 'c',
      },
      [MQ.M]: {
        outlineStyle: 'd',
      },
    });
  });
});
