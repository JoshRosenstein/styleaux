import { FontFeatureSettingsProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const FONTFEATURESETTINGS = 'fontFeatureSettings';

export interface FontFeatureSettingsProps<T = FontFeatureSettingsProperty> {
  /**
   * The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.
   *
   * **Initial value**: `normal`
   *
   * |  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
   * | :------: | :------: | :-----: | :----: | :----: |
   * |  **48**  |  **34**  | **9.1** | **15** | **10** |
   * | 16 _-x-_ | 15 _-x-_ |         |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-feature-settings
   */
  [FONTFEATURESETTINGS]: T;
}

export const createFontFeatureSettings = <
  T = FontFeatureSettingsProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<
    StyleOptions<FontFeatureSettingsProps<T>, Theme>,
    'key' | 'transformValue'
  >
> = {}) =>
  style<FontFeatureSettingsProps<T>, Theme, Media>({
    cssProp: FONTFEATURESETTINGS,
    prop: FONTFEATURESETTINGS,
    key,
    transformValue,
  });

export const createFontFeatureSettingsRule = <
  T = FontFeatureSettingsProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: FONTFEATURESETTINGS, getValue: transformer });

export const fontFeatureSettings = createFontFeatureSettings();

export const fontFeatureSettingsRule = createFontFeatureSettingsRule();
