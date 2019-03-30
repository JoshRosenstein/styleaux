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

import { borderInlineStartWidth } from '../borderInlineStartWidth';

describe('borderInlineStartWidth', () => {
  it('should return a function', () => {
    const result = borderInlineStartWidth();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderInlineStartWidth` as component and css prop', () => {
    const result = borderInlineStartWidth()({ borderInlineStartWidth: 'inherit' });
    expect(toStyles(result)).toEqual({ borderInlineStartWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderInlineStartWidth<'a'>()({ borderInlineStartWidth: 'a' });
    expect(toStyles(result)).toEqual({ borderInlineStartWidth: 'a' });
  });

  it('should use an interface which marks `borderInlineStartWidth` as optional', () => {
    const result = borderInlineStartWidth<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderInlineStartWidth<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderInlineStartWidth: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderInlineStartWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderInlineStartWidth<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderInlineStartWidth: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderInlineStartWidth: 'a',
      [MQ.D]: {
        borderInlineStartWidth: 'b',
      },
      [MQ.T]: {
        borderInlineStartWidth: 'c',
      },
      [MQ.M]: {
        borderInlineStartWidth: 'd',
      },
    });
  });
});
