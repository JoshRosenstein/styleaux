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

import { outlineOffset } from '../outlineOffset';

describe('outlineOffset', () => {
  it('should return a function', () => {
    const result = outlineOffset();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `outlineOffset` as component and css prop', () => {
    const result = outlineOffset()({ outlineOffset: 'inherit' });
    expect(toStyles(result)).toEqual({ outlineOffset: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = outlineOffset<'a'>()({ outlineOffset: 'a' });
    expect(toStyles(result)).toEqual({ outlineOffset: 'a' });
  });

  it('should use an interface which marks `outlineOffset` as optional', () => {
    const result = outlineOffset<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = outlineOffset<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ outlineOffset: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      outlineOffset: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = outlineOffset<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      outlineOffset: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      outlineOffset: 'a',
      [MQ.D]: {
        outlineOffset: 'b',
      },
      [MQ.T]: {
        outlineOffset: 'c',
      },
      [MQ.M]: {
        outlineOffset: 'd',
      },
    });
  });
});
