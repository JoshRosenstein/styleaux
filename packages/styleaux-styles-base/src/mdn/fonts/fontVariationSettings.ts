import { FontVariationSettingsProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const FONTVARIATIONSETTINGS='fontVariationSettings'

export interface FontVariationSettingsProps<T=FontVariationSettingsProperty> {
  /**
   * The **`font-variation-settings`** CSS property provides low-level control over variable font characteristics, by specifying the four letter axis names of the characteristics you want to vary, along with their values.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variation-settings
   */
  [FONTVARIATIONSETTINGS]: T;
}

export const createFontVariationSettings = <
  T = FontVariationSettingsProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<FontVariationSettingsProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<FontVariationSettingsProps<T>,Theme,Media>({
    cssProp:FONTVARIATIONSETTINGS,
    prop:FONTVARIATIONSETTINGS,
    key,
    transformValue,
  })

export const createFontVariationSettingsRule = <T = FontVariationSettingsProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: FONTVARIATIONSETTINGS, getValue: transformer})

export const fontVariationSettings =createFontVariationSettings()

export const fontVariationSettingsRule =createFontVariationSettingsRule()
