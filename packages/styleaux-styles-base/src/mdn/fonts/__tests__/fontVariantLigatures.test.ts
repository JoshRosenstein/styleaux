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

import { fontVariantLigatures } from '../fontVariantLigatures';

describe('fontVariantLigatures', () => {
  it('should return a function', () => {
    const result = fontVariantLigatures();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `fontVariantLigatures` as component and css prop', () => {
    const result = fontVariantLigatures()({ fontVariantLigatures: 'inherit' });
    expect(toStyles(result)).toEqual({ fontVariantLigatures: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = fontVariantLigatures<'a'>()({ fontVariantLigatures: 'a' });
    expect(toStyles(result)).toEqual({ fontVariantLigatures: 'a' });
  });

  it('should use an interface which marks `fontVariantLigatures` as optional', () => {
    const result = fontVariantLigatures<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = fontVariantLigatures<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ fontVariantLigatures: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      fontVariantLigatures: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = fontVariantLigatures<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      fontVariantLigatures: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      fontVariantLigatures: 'a',
      [MQ.D]: {
        fontVariantLigatures: 'b',
      },
      [MQ.T]: {
        fontVariantLigatures: 'c',
      },
      [MQ.M]: {
        fontVariantLigatures: 'd',
      },
    });
  });
});
