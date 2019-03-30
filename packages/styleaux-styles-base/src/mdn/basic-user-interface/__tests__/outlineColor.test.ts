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

import { outlineColor } from '../outlineColor';

describe('outlineColor', () => {
  it('should return a function', () => {
    const result = outlineColor();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `outlineColor` as component and css prop', () => {
    const result = outlineColor()({ outlineColor: 'inherit' });
    expect(toStyles(result)).toEqual({ outlineColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = outlineColor<'a'>()({ outlineColor: 'a' });
    expect(toStyles(result)).toEqual({ outlineColor: 'a' });
  });

  it('should use an interface which marks `outlineColor` as optional', () => {
    const result = outlineColor<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = outlineColor<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ outlineColor: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      outlineColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = outlineColor<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      outlineColor: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      outlineColor: 'a',
      [MQ.D]: {
        outlineColor: 'b',
      },
      [MQ.T]: {
        outlineColor: 'c',
      },
      [MQ.M]: {
        outlineColor: 'd',
      },
    });
  });
});
