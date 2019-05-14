import { BorderRightWidthProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BORDERRIGHTWIDTH = 'borderRightWidth';

export interface BorderRightWidthProps<T = BorderRightWidthProperty> {
  /**
   * The **`border-right-width`** CSS property sets the width of the right border of an element.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-width
   */
  [BORDERRIGHTWIDTH]: T;
}

export const createBorderRightWidth = <
  T = BorderRightWidthProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<BorderRightWidthProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<BorderRightWidthProps<T>, Theme, Media>({
    cssProp: BORDERRIGHTWIDTH,
    prop: BORDERRIGHTWIDTH,
    key,
    transform,
  });

export const createBorderRightWidthRule = <
  T = BorderRightWidthProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERRIGHTWIDTH, getValue: transformer });

export const borderRightWidth = createBorderRightWidth();

export const borderRightWidthRule = createBorderRightWidthRule();
