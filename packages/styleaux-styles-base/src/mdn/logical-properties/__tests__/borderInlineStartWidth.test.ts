import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createBorderInlineStartWidth } from '../borderInlineStartWidth';

describe('createBorderInlineStartWidth', () => {
  it('should return a function', () => {
    const result = createBorderInlineStartWidth();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createBorderInlineStartWidth` as component and css prop', () => {
    const result = createBorderInlineStartWidth()({ borderInlineStartWidth: 'inherit' });
    expect(toStyles(result)).toEqual({ borderInlineStartWidth: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createBorderInlineStartWidth<'a'>()({ borderInlineStartWidth: 'a' });
    expect(toStyles(result)).toEqual({ borderInlineStartWidth: 'a' });
  });

  it('should use an interface which marks `createBorderInlineStartWidth` as optional', () => {
    const result = createBorderInlineStartWidth<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createBorderInlineStartWidth<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderInlineStartWidth: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderInlineStartWidth: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createBorderInlineStartWidth<
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
