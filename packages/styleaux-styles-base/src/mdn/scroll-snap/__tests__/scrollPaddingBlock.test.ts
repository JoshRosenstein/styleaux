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

import { scrollPaddingBlock } from '../scrollPaddingBlock';

describe('scrollPaddingBlock', () => {
  it('should return a function', () => {
    const result = scrollPaddingBlock();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `scrollPaddingBlock` as component and css prop', () => {
    const result = scrollPaddingBlock()({ scrollPaddingBlock: 'inherit' });
    expect(toStyles(result)).toEqual({ scrollPaddingBlock: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollPaddingBlock<'a'>()({ scrollPaddingBlock: 'a' });
    expect(toStyles(result)).toEqual({ scrollPaddingBlock: 'a' });
  });

  it('should use an interface which marks `scrollPaddingBlock` as optional', () => {
    const result = scrollPaddingBlock<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = scrollPaddingBlock<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ scrollPaddingBlock: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      scrollPaddingBlock: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollPaddingBlock<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      scrollPaddingBlock: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      scrollPaddingBlock: 'a',
      [MQ.D]: {
        scrollPaddingBlock: 'b',
      },
      [MQ.T]: {
        scrollPaddingBlock: 'c',
      },
      [MQ.M]: {
        scrollPaddingBlock: 'd',
      },
    });
  });
});
