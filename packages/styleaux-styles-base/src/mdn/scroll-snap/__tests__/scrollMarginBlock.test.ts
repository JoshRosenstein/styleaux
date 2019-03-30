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

import { scrollMarginBlock } from '../scrollMarginBlock';

describe('scrollMarginBlock', () => {
  it('should return a function', () => {
    const result = scrollMarginBlock();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `scrollMarginBlock` as component and css prop', () => {
    const result = scrollMarginBlock()({ scrollMarginBlock: 'inherit' });
    expect(toStyles(result)).toEqual({ scrollMarginBlock: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = scrollMarginBlock<'a'>()({ scrollMarginBlock: 'a' });
    expect(toStyles(result)).toEqual({ scrollMarginBlock: 'a' });
  });

  it('should use an interface which marks `scrollMarginBlock` as optional', () => {
    const result = scrollMarginBlock<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = scrollMarginBlock<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ scrollMarginBlock: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      scrollMarginBlock: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = scrollMarginBlock<
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
