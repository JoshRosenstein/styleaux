import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createScrollPaddingLeft } from '../scrollPaddingLeft';

describe('createScrollPaddingLeft', () => {
  it('should return a function', () => {
    const result = createScrollPaddingLeft();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createScrollPaddingLeft` as component and css prop', () => {
    const result = createScrollPaddingLeft()({ scrollPaddingLeft: 'inherit' });
    expect(toStyles(result)).toEqual({ scrollPaddingLeft: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createScrollPaddingLeft<'a'>()({ scrollPaddingLeft: 'a' });
    expect(toStyles(result)).toEqual({ scrollPaddingLeft: 'a' });
  });

  it('should use an interface which marks `createScrollPaddingLeft` as optional', () => {
    const result = createScrollPaddingLeft<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createScrollPaddingLeft<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ scrollPaddingLeft: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      scrollPaddingLeft: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createScrollPaddingLeft<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      scrollPaddingLeft: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      scrollPaddingLeft: 'a',
      [MQ.D]: {
        scrollPaddingLeft: 'b',
      },
      [MQ.T]: {
        scrollPaddingLeft: 'c',
      },
      [MQ.M]: {
        scrollPaddingLeft: 'd',
      },
    });
  });
});
