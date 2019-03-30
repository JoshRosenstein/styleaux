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

import { marginBlock } from '../marginBlock';

describe('marginBlock', () => {
  it('should return a function', () => {
    const result = marginBlock();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `marginBlock` as component and css prop', () => {
    const result = marginBlock()({ marginBlock: 'inherit' });
    expect(toStyles(result)).toEqual({ marginBlock: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = marginBlock<'a'>()({ marginBlock: 'a' });
    expect(toStyles(result)).toEqual({ marginBlock: 'a' });
  });

  it('should use an interface which marks `marginBlock` as optional', () => {
    const result = marginBlock<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = marginBlock<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ marginBlock: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      marginBlock: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = marginBlock<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      marginBlock: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      marginBlock: 'a',
      [MQ.D]: {
        marginBlock: 'b',
      },
      [MQ.T]: {
        marginBlock: 'c',
      },
      [MQ.M]: {
        marginBlock: 'd',
      },
    });
  });
});
