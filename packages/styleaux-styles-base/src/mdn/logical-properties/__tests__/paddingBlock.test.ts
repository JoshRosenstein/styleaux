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

import { createPaddingBlock } from '../paddingBlock';

describe('paddingBlock', () => {
  it('should return a function', () => {
    const result = createPaddingBlock();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `paddingBlock` as component and css prop', () => {
    const result = createPaddingBlock()({ paddingBlock: 'inherit' });
    expect(toStyles(result)).toEqual({ paddingBlock: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createPaddingBlock<'a'>()({ paddingBlock: 'a' });
    expect(toStyles(result)).toEqual({ paddingBlock: 'a' });
  });

  it('should use an interface which marks `paddingBlock` as optional', () => {
    const result = createPaddingBlock<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createPaddingBlock<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ paddingBlock: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      paddingBlock: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createPaddingBlock<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      paddingBlock: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      paddingBlock: 'a',
      [MQ.D]: {
        paddingBlock: 'b',
      },
      [MQ.T]: {
        paddingBlock: 'c',
      },
      [MQ.M]: {
        paddingBlock: 'd',
      },
    });
  });
});
