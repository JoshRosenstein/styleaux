import { BorderCollapseProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BORDERCOLLAPSE = 'borderCollapse';

export interface BorderCollapseProps<T = BorderCollapseProperty> {
  /**
   * The **`border-collapse`** CSS property sets whether cells inside a `<table>` have shared or separate borders.
   *
   * **Initial value**: `separate`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-collapse
   */
  [BORDERCOLLAPSE]: T;
}

export const createBorderCollapse = <
  T = BorderCollapseProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<BorderCollapseProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<BorderCollapseProps<T>, Theme, Media>({
    cssProp: BORDERCOLLAPSE,
    prop: BORDERCOLLAPSE,
    key,
    transform,
  });

export const createBorderCollapseRule = <
  T = BorderCollapseProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERCOLLAPSE, getValue: transformer });

export const borderCollapse = createBorderCollapse();

export const borderCollapseRule = createBorderCollapseRule();
