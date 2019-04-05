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

import { createPaddingTop } from '../paddingTop';

describe('paddingTop', () => {
  it('should return a function', () => {
    const result = createPaddingTop();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `paddingTop` as component and css prop', () => {
    const result = createPaddingTop()({ paddingTop: 'inherit' });
    expect(toStyles(result)).toEqual({ paddingTop: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createPaddingTop<'a'>()({ paddingTop: 'a' });
    expect(toStyles(result)).toEqual({ paddingTop: 'a' });
  });

  it('should use an interface which marks `paddingTop` as optional', () => {
    const result = createPaddingTop<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = createPaddingTop<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ paddingTop: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      paddingTop: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createPaddingTop<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      paddingTop: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      paddingTop: 'a',
      [MQ.D]: {
        paddingTop: 'b',
      },
      [MQ.T]: {
        paddingTop: 'c',
      },
      [MQ.M]: {
        paddingTop: 'd',
      },
    });
  });
});
