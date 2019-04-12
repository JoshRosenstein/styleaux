import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createBorderInlineStyle } from '../borderInlineStyle';

describe('createBorderInlineStyle', () => {
  it('should return a function', () => {
    const result = createBorderInlineStyle();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBorderInlineStyle` as component and css prop', () => {
    const result = createBorderInlineStyle()({ borderInlineStyle: 'inherit' });
    expect(toStyles(result)).toEqual({ borderInlineStyle: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderInlineStyle<'a'>()({ borderInlineStyle: 'a' });
    expect(toStyles(result)).toEqual({ borderInlineStyle: 'a' });
  });

  it('should use an interface which marks `createBorderInlineStyle` as optional', () => {
    const result = createBorderInlineStyle<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBorderInlineStyle<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderInlineStyle: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderInlineStyle: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderInlineStyle<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      borderInlineStyle: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      borderInlineStyle: 'a',
      [MQ.D]: {
        borderInlineStyle: 'b',
      },
      [MQ.T]: {
        borderInlineStyle: 'c',
      },
      [MQ.M]: {
        borderInlineStyle: 'd',
      },
    });
  });
});
