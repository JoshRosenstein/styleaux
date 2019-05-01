import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createScrollMarginBottom } from '../scrollMarginBottom';

describe('createScrollMarginBottom', () => {
  it('should return a function', () => {
    const result = createScrollMarginBottom();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createScrollMarginBottom` as component and css prop', () => {
    const result = createScrollMarginBottom()({ scrollMarginBottom: 'inherit' });
    expect(toStyles(result)).toEqual({ scrollMarginBottom: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createScrollMarginBottom<'a'>()({ scrollMarginBottom: 'a' });
    expect(toStyles(result)).toEqual({ scrollMarginBottom: 'a' });
  });

  it('should use an interface which marks `createScrollMarginBottom` as optional', () => {
    const result = createScrollMarginBottom<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createScrollMarginBottom<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ scrollMarginBottom: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      scrollMarginBottom: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createScrollMarginBottom<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      scrollMarginBottom: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      scrollMarginBottom: 'a',
      [MQ.D]: {
        scrollMarginBottom: 'b',
      },
      [MQ.T]: {
        scrollMarginBottom: 'c',
      },
      [MQ.M]: {
        scrollMarginBottom: 'd',
      },
    });
  });
});
