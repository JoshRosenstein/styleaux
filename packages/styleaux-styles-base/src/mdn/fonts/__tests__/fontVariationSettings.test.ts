import {
  IMedia,
  ITheme,
  IThemeWithoutBreakpoints,
  theme,
  themeWithoutBreakpoints,
  MQ,
  toStyles
} from '../../../__testutils__';

import { createFontVariationSettings } from '../fontVariationSettings';

describe('createFontVariationSettings', () => {
  it('should return a function', () => {
    const result = createFontVariationSettings();
    expect(toStyles(result)).toBeInstanceOf(Function);
  });

  it('should use `createFontVariationSettings` as component and css prop', () => {
    const result = createFontVariationSettings()({ fontVariationSettings: 'inherit' });
    expect(toStyles(result)).toEqual({ fontVariationSettings: 'inherit' });
  });

  it('should allow using a custom value type', () => {
    const result = createFontVariationSettings<'a'>()({ fontVariationSettings: 'a' });
    expect(toStyles(result)).toEqual({ fontVariationSettings: 'a' });
  });

  it('should use an interface which marks `createFontVariationSettings` as optional', () => {
    const result = createFontVariationSettings<'a'>()({});
    expect(toStyles(result)).toEqual({});
  });

  it('should allow using a theme', () => {
    const result = createFontVariationSettings<'value',never, IThemeWithoutBreakpoints>({
      key: 'dummy',
    })({ fontVariationSettings: 'value', theme: themeWithoutBreakpoints });
    expect(toStyles(result)).toEqual({
      fontVariationSettings: themeWithoutBreakpoints.dummy.value,
    });
  });

  it('should allow using breakpoints', () => {
    const result = createFontVariationSettings<
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
