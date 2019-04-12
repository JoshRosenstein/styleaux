import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createMaxInlineSize } from '../maxInlineSize';

describe('createMaxInlineSize', () => {
  it('should return a function', () => {
    const result = createMaxInlineSize();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createMaxInlineSize` as component and css prop', () => {
    const result = createMaxInlineSize()({ maxInlineSize: 'inherit' });
    expect(toStyles(result)).toEqual({ maxInlineSize: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createMaxInlineSize<'a'>()({ maxInlineSize: 'a' });
    expect(toStyles(result)).toEqual({ maxInlineSize: 'a' });
  });

  it('should use an interface which marks `createMaxInlineSize` as optional', () => {
    const result = createMaxInlineSize<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createMaxInlineSize<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ maxInlineSize: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      maxInlineSize: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createMaxInlineSize<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      maxInlineSize: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      maxInlineSize: 'a',
      [MQ.D]: {
        maxInlineSize: 'b',
      },
      [MQ.T]: {
        maxInlineSize: 'c',
      },
      [MQ.M]: {
        maxInlineSize: 'd',
      },
    });
  });
});
