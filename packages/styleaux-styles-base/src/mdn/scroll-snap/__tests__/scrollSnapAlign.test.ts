import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createScrollSnapAlign } from '../scrollSnapAlign';

describe('createScrollSnapAlign', () => {
  it('should return a function', () => {
    const result = createScrollSnapAlign();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createScrollSnapAlign` as component and css prop', () => {
    const result = createScrollSnapAlign()({ scrollSnapAlign: 'inherit' });
    expect(toStyles(result)).toEqual({ scrollSnapAlign: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createScrollSnapAlign<'a'>()({ scrollSnapAlign: 'a' });
    expect(toStyles(result)).toEqual({ scrollSnapAlign: 'a' });
  });

  it('should use an interface which marks `createScrollSnapAlign` as optional', () => {
    const result = createScrollSnapAlign<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createScrollSnapAlign<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ scrollSnapAlign: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      scrollSnapAlign: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createScrollSnapAlign<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      scrollSnapAlign: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
   expect(toStyles(result)).toEqual({
      scrollSnapAlign: 'a',
      [MQ.D]: {
        scrollSnapAlign: 'b',
      },
      [MQ.T]: {
        scrollSnapAlign: 'c',
      },
      [MQ.M]: {
        scrollSnapAlign: 'd',
      },
    });
  });
});
