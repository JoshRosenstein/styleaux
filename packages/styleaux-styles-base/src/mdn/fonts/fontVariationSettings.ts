import { FontVariationSettingsProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const FONTVARIATIONSETTINGS = 'fontVariationSettings';

export interface FontVariationSettingsProps<T = FontVariationSettingsProperty> {
  /**
   * The **`font-variation-settings`** CSS property provides low-level control over variable font characteristics, by specifying the four letter axis names of the characteristics you want to vary, along with their values.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **62** | **62**  | **11** | **17** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variation-settings
   */
  [FONTVARIATIONSETTINGS]: T;
}

export const createFontVariationSettings = <
  T = FontVariationSettingsProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<
    StyleOptions<FontVariationSettingsProps<T>, Theme>,
    'key' | 'transform'
  >
> = {}) =>
  style<FontVariationSettingsProps<T>, Theme, Media>({
    cssProp: FONTVARIATIONSETTINGS,
    prop: FONTVARIATIONSETTINGS,
    key,
    transform,
  });

export const createFontVariationSettingsRule = <
  T = FontVariationSettingsProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: FONTVARIATIONSETTINGS, getValue: transformer });

export const fontVariationSettings = createFontVariationSettings();

export const fontVariationSettingsRule = createFontVariationSettingsRule();
