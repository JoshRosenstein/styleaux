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

import { createBorderInlineEnd } from '../borderInlineEnd';

describe('borderInlineEnd', () => {
  it('should return a function', () => {
    const result = createBorderInlineEnd();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderInlineEnd` as component and css prop', () => {
    const result = createBorderInlineEnd()({ borderInlineEnd: 'inherit' });
    expect(toStyles(result)).toEqual({ borderInlineEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderInlineEnd<'a'>()({ borderInlineEnd: 'a' });
    expect(toStyles(result)).toEqual({ borderInlineEnd: 'a' });
  });

  it('should use an interface which marks `borderInlineEnd` as optional', () => {
    const result = createBorderInlineEnd<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createBorderInlineEnd<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderInlineEnd: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderInlineEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderInlineEnd<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderInlineEnd: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderInlineEnd: 'a',
      [MQ.D]: {
        borderInlineEnd: 'b',
      },
      [MQ.T]: {
        borderInlineEnd: 'c',
      },
      [MQ.M]: {
        borderInlineEnd: 'd',
      },
    });
  });
});
