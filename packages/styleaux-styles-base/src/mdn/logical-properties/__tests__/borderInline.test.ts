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

import { borderInline } from '../borderInline';

describe('borderInline', () => {
  it('should return a function', () => {
    const result = borderInline();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderInline` as component and css prop', () => {
    const result = borderInline()({ borderInline: 'inherit' });
    expect(toStyles(result)).toEqual({ borderInline: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderInline<'a'>()({ borderInline: 'a' });
    expect(toStyles(result)).toEqual({ borderInline: 'a' });
  });

  it('should use an interface which marks `borderInline` as optional', () => {
    const result = borderInline<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderInline<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderInline: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderInline: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderInline<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderInline: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderInline: 'a',
      [MQ.D]: {
        borderInline: 'b',
      },
      [MQ.T]: {
        borderInline: 'c',
      },
      [MQ.M]: {
        borderInline: 'd',
      },
    });
  });
});
