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

import { fontVariantNumeric } from '../fontVariantNumeric';

describe('fontVariantNumeric', () => {
  it('should return a function', () => {
    const result = fontVariantNumeric();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `fontVariantNumeric` as component and css prop', () => {
    const result = fontVariantNumeric()({ fontVariantNumeric: 'inherit' });
    expect(toStyles(result)).toEqual({ fontVariantNumeric: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = fontVariantNumeric<'a'>()({ fontVariantNumeric: 'a' });
    expect(toStyles(result)).toEqual({ fontVariantNumeric: 'a' });
  });

  it('should use an interface which marks `fontVariantNumeric` as optional', () => {
    const result = fontVariantNumeric<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = fontVariantNumeric<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ fontVariantNumeric: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      fontVariantNumeric: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = fontVariantNumeric<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      fontVariantNumeric: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      fontVariantNumeric: 'a',
      [MQ.D]: {
        fontVariantNumeric: 'b',
      },
      [MQ.T]: {
        fontVariantNumeric: 'c',
      },
      [MQ.M]: {
        fontVariantNumeric: 'd',
      },
    });
  });
});
