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

import { fontFeatureSettings } from '../fontFeatureSettings';

describe('fontFeatureSettings', () => {
  it('should return a function', () => {
    const result = fontFeatureSettings();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `fontFeatureSettings` as component and css prop', () => {
    const result = fontFeatureSettings()({ fontFeatureSettings: 'inherit' });
    expect(toStyles(result)).toEqual({ fontFeatureSettings: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = fontFeatureSettings<'a'>()({ fontFeatureSettings: 'a' });
    expect(toStyles(result)).toEqual({ fontFeatureSettings: 'a' });
  });

  it('should use an interface which marks `fontFeatureSettings` as optional', () => {
    const result = fontFeatureSettings<'a'>()({});
    expect(result).toEqual([]);
  });

  it('should allow using a theme', () => {
    const result = fontFeatureSettings<'value',never,IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ fontFeatureSettings: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      fontFeatureSettings: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = fontFeatureSettings<
      'a' | 'b' | 'c' | 'd',
      IMedia,
      ITheme

    >()({
      fontFeatureSettings: {
        all: 'a',
        D: 'b',
        T: 'c',
        M: 'd',
      },
      theme,
    });
    expect(toStyles(result)).toEqual({
      fontFeatureSettings: 'a',
      [MQ.D]: {
        fontFeatureSettings: 'b',
      },
      [MQ.T]: {
        fontFeatureSettings: 'c',
      },
      [MQ.M]: {
        fontFeatureSettings: 'd',
      },
    });
  });
});
