import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createScrollMarginBlockEnd } from '../scrollMarginBlockEnd';

describe('createScrollMarginBlockEnd', () => {
  it('should return a function', () => {
    const result = createScrollMarginBlockEnd();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createScrollMarginBlockEnd` as component and css prop', () => {
    const result = createScrollMarginBlockEnd()({ scrollMarginBlockEnd: 'inherit' });
    expect(toStyles(result)).toEqual({ scrollMarginBlockEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createScrollMarginBlockEnd<'a'>()({ scrollMarginBlockEnd: 'a' });
    expect(toStyles(result)).toEqual({ scrollMarginBlockEnd: 'a' });
  });

  it('should use an interface which marks `createScrollMarginBlockEnd` as optional', () => {
    const result = createScrollMarginBlockEnd<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createScrollMarginBlockEnd<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ scrollMarginBlockEnd: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      scrollMarginBlockEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createScrollMarginBlockEnd<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      scrollMarginBlockEnd: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      scrollMarginBlockEnd: 'a',
      [MQ.D]: {
        scrollMarginBlockEnd: 'b',
      },
      [MQ.T]: {
        scrollMarginBlockEnd: 'c',
      },
      [MQ.M]: {
        scrollMarginBlockEnd: 'd',
      },
    });
  });
});
