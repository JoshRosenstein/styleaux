import { OutlineProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const OUTLINE = 'outline';

export interface OutlineProps<T = OutlineProperty> {
  /**
   * The **`outline`** CSS property is a shorthand to set various outline properties in a single declaration: `outline-style`, `outline-width`, and `outline-color`.
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline
   */
  [OUTLINE]: T;
}

export const createOutline = <
  T = OutlineProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<OutlineProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<OutlineProps<T>, Theme, Media>({
    cssProp: OUTLINE,
    prop: OUTLINE,
    key,
    transform,
  });

export const createOutlineRule = <T = OutlineProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: OUTLINE, getValue: transformer });

export const outline = createOutline();

export const outlineRule = createOutlineRule();
