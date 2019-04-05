import { FontVariationSettingsProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const FONTVARIATIONSETTINGS='fontVariationSettings'

export interface IFontVariationSettingsProps<T> {
  /**
   * The **`font-variation-settings`** CSS property provides low-level control over variable font characteristics, by specifying the four letter axis names of the characteristics you want to vary, along with their values.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variation-settings
   */
  fontVariationSettings: T;
}

export const createFontVariationSettings = <
  T = FontVariationSettingsProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IFontVariationSettingsProps<T>, Theme, Breakpoints>({
    cssProp: FONTVARIATIONSETTINGS,
    prop: FONTVARIATIONSETTINGS,
    alias,
    key,
    transformValue,
  })

export const createFontVariationSettingsRule = <T = FontVariationSettingsProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: FONTVARIATIONSETTINGS, getValue: transformer})

export const fontVariationSettings =createFontVariationSettings()

export const fontVariationSettingsRule =createFontVariationSettingsRule()
