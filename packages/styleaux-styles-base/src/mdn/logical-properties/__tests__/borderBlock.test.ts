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

import { borderBlock } from '../borderBlock';

describe('borderBlock', () => {
  it('should return a function', () => {
    const result = borderBlock();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `borderBlock` as component and css prop', () => {
    const result = borderBlock()({ borderBlock: 'inherit' });
    expect(toStyles(result)).toEqual({ borderBlock: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = borderBlock<'a'>()({ borderBlock: 'a' });
    expect(toStyles(result)).toEqual({ borderBlock: 'a' });
  });

  it('should use an interface which marks `borderBlock` as optional', () => {
    const result = borderBlock<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = borderBlock<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ borderBlock: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      borderBlock: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = borderBlock<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      borderBlock: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      borderBlock: 'a',
      [MQ.D]: {
        borderBlock: 'b',
      },
      [MQ.T]: {
        borderBlock: 'c',
      },
      [MQ.M]: {
        borderBlock: 'd',
      },
    });
  });
});
