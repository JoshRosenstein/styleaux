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

import { fontVariationSettings } from '../fontVariationSettings';

describe('fontVariationSettings', () => {
  it('should return a function', () => {
    const result = fontVariationSettings();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `fontVariationSettings` as component and css prop', () => {
    const result = fontVariationSettings()({ fontVariationSettings: 'inherit' });
    expect(toStyles(result)).toEqual({ fontVariationSettings: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = fontVariationSettings<'a'>()({ fontVariationSettings: 'a' });
    expect(toStyles(result)).toEqual({ fontVariationSettings: 'a' });
  });

  it('should use an interface which marks `fontVariationSettings` as optional', () => {
    const result = fontVariationSettings<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = fontVariationSettings<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ fontVariationSettings: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      fontVariationSettings: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = fontVariationSettings<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      fontVariationSettings: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      fontVariationSettings: 'a',
      [MQ.D]: {
        fontVariationSettings: 'b',
      },
      [MQ.T]: {
        fontVariationSettings: 'c',
      },
      [MQ.M]: {
        fontVariationSettings: 'd',
      },
    });
  });
});
