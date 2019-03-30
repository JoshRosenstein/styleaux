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

import { paddingBlockEnd } from '../paddingBlockEnd';

describe('paddingBlockEnd', () => {
  it('should return a function', () => {
    const result = paddingBlockEnd();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `paddingBlockEnd` as component and css prop', () => {
    const result = paddingBlockEnd()({ paddingBlockEnd: 'inherit' });
    expect(toStyles(result)).toEqual({ paddingBlockEnd: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = paddingBlockEnd<'a'>()({ paddingBlockEnd: 'a' });
    expect(toStyles(result)).toEqual({ paddingBlockEnd: 'a' });
  });

  it('should use an interface which marks `paddingBlockEnd` as optional', () => {
    const result = paddingBlockEnd<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = paddingBlockEnd<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ paddingBlockEnd: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      paddingBlockEnd: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = paddingBlockEnd<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      paddingBlockEnd: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      paddingBlockEnd: 'a',
      [MQ.D]: {
        paddingBlockEnd: 'b',
      },
      [MQ.T]: {
        paddingBlockEnd: 'c',
      },
      [MQ.M]: {
        paddingBlockEnd: 'd',
      },
    });
  });
});
