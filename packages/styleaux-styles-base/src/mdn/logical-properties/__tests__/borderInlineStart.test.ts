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

import { createBorderInlineStart } from '../borderInlineStart';

describe('borderInlineStart', () => {
  it('should return a function', () => {
    const result = createBorderInlineStart();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderInlineStart` as component and css prop', () => {
    const result = createBorderInlineStart()({ borderInlineStart: 'inherit' });
    expect(toStyles(result)).toEqual({ borderInlineStart: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderInlineStart<'a'>()({ borderInlineStart: 'a' });
    expect(toStyles(result)).toEqual({ borderInlineStart: 'a' });
  });

  it('should use an interface which marks `borderInlineStart` as optional', () => {
    const result = createBorderInlineStart<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createBorderInlineStart<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderInlineStart: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderInlineStart: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderInlineStart<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderInlineStart: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderInlineStart: 'a',
      [MQ.D]: {
        borderInlineStart: 'b',
      },
      [MQ.T]: {
        borderInlineStart: 'c',
      },
      [MQ.M]: {
        borderInlineStart: 'd',
      },
    });
  });
});
