import { FontFeatureSettingsProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const FONTFEATURESETTINGS='fontFeatureSettings'

export interface FontFeatureSettingsProps<T=FontFeatureSettingsProperty> {
  /**
   * The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-feature-settings
   */
  [FONTFEATURESETTINGS]: T;
}

export const createFontFeatureSettings = <
  T = FontFeatureSettingsProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<FontFeatureSettingsProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<FontFeatureSettingsProps<T>,Theme,Media>({
    cssProp:FONTFEATURESETTINGS,
    prop:FONTFEATURESETTINGS,
    key,
    transformValue,
  })

export const createFontFeatureSettingsRule = <T = FontFeatureSettingsProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: FONTFEATURESETTINGS, getValue: transformer})

export const fontFeatureSettings =createFontFeatureSettings()

export const fontFeatureSettingsRule =createFontFeatureSettingsRule()
