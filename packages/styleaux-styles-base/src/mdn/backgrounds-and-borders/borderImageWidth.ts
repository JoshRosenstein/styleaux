import { BorderImageWidthProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BORDERIMAGEWIDTH = 'borderImageWidth';

export interface BorderImageWidthProps<T = BorderImageWidthProperty> {
  /**
   * The **`border-image-width`** CSS property sets the width of an element's border image.
   *
   * **Initial value**: `1`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **13**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-width
   */
  [BORDERIMAGEWIDTH]: T;
}

export const createBorderImageWidth = <
  T = BorderImageWidthProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<BorderImageWidthProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<BorderImageWidthProps<T>, Theme, Media>({
    cssProp: BORDERIMAGEWIDTH,
    prop: BORDERIMAGEWIDTH,
    key,
    transform,
  });

export const createBorderImageWidthRule = <
  T = BorderImageWidthProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERIMAGEWIDTH, getValue: transformer });

export const borderImageWidth = createBorderImageWidth();

export const borderImageWidthRule = createBorderImageWidthRule();
