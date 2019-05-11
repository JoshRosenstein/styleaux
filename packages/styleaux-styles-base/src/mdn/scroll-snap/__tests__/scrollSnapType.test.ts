import { createScrollSnapType } from '../scrollSnapType';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createScrollSnapType', () => {
  it('should return a function', () => {
    const result = createScrollSnapType();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createScrollSnapType` as component and css prop', () => {
    const result = createScrollSnapType()({ scrollSnapType: 'inherit' });
    expect(toStyles(result)).toEqual({ scrollSnapType: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createScrollSnapType<'a'>()({ scrollSnapType: 'a' });
    expect(toStyles(result)).toEqual({ scrollSnapType: 'a' });
  });

  it('should use an interface which marks `createScrollSnapType` as optional', () => {
    const result = createScrollSnapType<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createScrollSnapType<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ scrollSnapType: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      scrollSnapType: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createScrollSnapType<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      scrollSnapType: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      scrollSnapType: 'a',
      [MQ.D]: {
        scrollSnapType: 'b',
      },
      [MQ.T]: {
        scrollSnapType: 'c',
      },
      [MQ.M]: {
        scrollSnapType: 'd',
      },
    });
  });
});
