import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { FontVariationSettingsProperty } from '@styleaux/csstype';

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
>(
  config: Config<FontVariationSettingsProps<T>, Theme> = {},
) =>
  style<FontVariationSettingsProps<T>, Theme, Media>({
    cssProp: FONTVARIATIONSETTINGS,
    prop: FONTVARIATIONSETTINGS,
    ...config,
  });

export const createFontVariationSettingsRule = <
  T = FontVariationSettingsProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: FONTVARIATIONSETTINGS, getValue: transformer });

export const fontVariationSettings = createFontVariationSettings();

export const fontVariationSettingsRule = createFontVariationSettingsRule();
