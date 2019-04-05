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

import { createMinInlineSize } from '../minInlineSize';

describe('minInlineSize', () => {
  it('should return a function', () => {
    const result = createMinInlineSize();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `minInlineSize` as component and css prop', () => {
    const result = createMinInlineSize()({ minInlineSize: 'inherit' });
    expect(toStyles(result)).toEqual({ minInlineSize: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createMinInlineSize<'a'>()({ minInlineSize: 'a' });
    expect(toStyles(result)).toEqual({ minInlineSize: 'a' });
  });

  it('should use an interface which marks `minInlineSize` as optional', () => {
    const result = createMinInlineSize<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createMinInlineSize<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ minInlineSize: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      minInlineSize: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createMinInlineSize<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      minInlineSize: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      minInlineSize: 'a',
      [MQ.D]: {
        minInlineSize: 'b',
      },
      [MQ.T]: {
        minInlineSize: 'c',
      },
      [MQ.M]: {
        minInlineSize: 'd',
      },
    });
  });
});
