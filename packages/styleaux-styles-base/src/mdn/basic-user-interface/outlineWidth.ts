import { OutlineWidthProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const OUTLINEWIDTH = 'outlineWidth';

export interface OutlineWidthProps<T = OutlineWidthProperty> {
  /**
   * The **`outline-width`** CSS property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-width
   */
  [OUTLINEWIDTH]: T;
}

export const createOutlineWidth = <
  T = OutlineWidthProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<OutlineWidthProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<OutlineWidthProps<T>, Theme, Media>({
    cssProp: OUTLINEWIDTH,
    prop: OUTLINEWIDTH,
    key,
    transform,
  });

export const createOutlineWidthRule = <T = OutlineWidthProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: OUTLINEWIDTH, getValue: transformer });

export const outlineWidth = createOutlineWidth();

export const outlineWidthRule = createOutlineWidthRule();
