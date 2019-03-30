import { FontFeatureSettingsProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const FONTFEATURESETTINGS='fontFeatureSettings'

export interface IFontFeatureSettingsProps<T> {
  /**
   * The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-feature-settings
   */
  fontFeatureSettings: T;
}

export const fontFeatureSettings = <
  T = FontFeatureSettingsProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IFontFeatureSettingsProps<T>, Theme, Breakpoints>({
    cssProp: FONTFEATURESETTINGS,
    prop: FONTFEATURESETTINGS,
    alias,
    key,
    transformValue,
  })

export const fontFeatureSettingsRule = <T = FontFeatureSettingsProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: FONTFEATURESETTINGS, getValue: transformer})
