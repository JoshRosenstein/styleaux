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

import { createBorderInlineWidth } from '../borderInlineWidth';

describe('borderInlineWidth', () => {
  it('should return a function', () => {
    const result = createBorderInlineWidth();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderInlineWidth` as component and css prop', () => {
    const result = createBorderInlineWidth()({ borderInlineWidth: 'inherit' });
    expect(toStyles(result)).toEqual({ borderInlineWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderInlineWidth<'a'>()({ borderInlineWidth: 'a' });
    expect(toStyles(result)).toEqual({ borderInlineWidth: 'a' });
  });

  it('should use an interface which marks `borderInlineWidth` as optional', () => {
    const result = createBorderInlineWidth<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createBorderInlineWidth<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderInlineWidth: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderInlineWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderInlineWidth<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderInlineWidth: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderInlineWidth: 'a',
      [MQ.D]: {
        borderInlineWidth: 'b',
      },
      [MQ.T]: {
        borderInlineWidth: 'c',
      },
      [MQ.M]: {
        borderInlineWidth: 'd',
      },
    });
  });
});
