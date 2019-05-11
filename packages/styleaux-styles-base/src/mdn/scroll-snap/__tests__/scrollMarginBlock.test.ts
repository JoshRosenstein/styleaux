import { createScrollMarginBlock } from '../scrollMarginBlock';
import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles,
} from '../../../__testutils__';

describe('createScrollMarginBlock', () => {
  it('should return a function', () => {
    const result = createScrollMarginBlock();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createScrollMarginBlock` as component and css prop', () => {
    const result = createScrollMarginBlock()({ scrollMarginBlock: 'inherit' });
    expect(toStyles(result)).toEqual({ scrollMarginBlock: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createScrollMarginBlock<'a'>()({ scrollMarginBlock: 'a' });
    expect(toStyles(result)).toEqual({ scrollMarginBlock: 'a' });
  });

  it('should use an interface which marks `createScrollMarginBlock` as optional', () => {
    const result = createScrollMarginBlock<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createScrollMarginBlock<
      'value',
      never,
      IThemeWithoutBreakpoints
    >({
      key: 'dummy',
    })({ scrollMarginBlock: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      scrollMarginBlock: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createScrollMarginBlock<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme
    >()({
      scrollMarginBlock: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      scrollMarginBlock: 'a',
      [MQ.D]: {
        scrollMarginBlock: 'b',
      },
      [MQ.T]: {
        scrollMarginBlock: 'c',
      },
      [MQ.M]: {
        scrollMarginBlock: 'd',
      },
    });
  });
});
