import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createBorderInlineEndColor } from '../borderInlineEndColor';

describe('createBorderInlineEndColor', () => {
  it('should return a function', () => {
    const result = createBorderInlineEndColor();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBorderInlineEndColor` as component and css prop', () => {
    const result = createBorderInlineEndColor()({ borderInlineEndColor: 'inherit' });
    expect(toStyles(result)).toEqual({ borderInlineEndColor: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderInlineEndColor<'a'>()({ borderInlineEndColor: 'a' });
    expect(toStyles(result)).toEqual({ borderInlineEndColor: 'a' });
  });

  it('should use an interface which marks `createBorderInlineEndColor` as optional', () => {
    const result = createBorderInlineEndColor<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBorderInlineEndColor<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderInlineEndColor: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderInlineEndColor: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderInlineEndColor<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      borderInlineEndColor: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      borderInlineEndColor: 'a',
      [MQ.D]: {
        borderInlineEndColor: 'b',
      },
      [MQ.T]: {
        borderInlineEndColor: 'c',
      },
      [MQ.M]: {
        borderInlineEndColor: 'd',
      },
    });
  });
});
