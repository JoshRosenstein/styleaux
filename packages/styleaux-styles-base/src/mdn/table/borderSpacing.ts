import { BorderSpacingProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BORDERSPACING = 'borderSpacing';

export interface BorderSpacingProps<T = BorderSpacingProperty> {
  /**
   * The **`border-spacing`** CSS property sets the distance between the borders of adjacent `<table>` cells. This property applies only when `border-collapse` is `separate`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-spacing
   */
  [BORDERSPACING]: T;
}

export const createBorderSpacing = <
  T = BorderSpacingProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<BorderSpacingProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<BorderSpacingProps<T>, Theme, Media>({
    cssProp: BORDERSPACING,
    prop: BORDERSPACING,
    key,
    transformValue,
  });

export const createBorderSpacingRule = <T = BorderSpacingProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERSPACING, getValue: transformer });

export const borderSpacing = createBorderSpacing();

export const borderSpacingRule = createBorderSpacingRule();
