import { BorderTopWidthProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BORDERTOPWIDTH = 'borderTopWidth';

export interface BorderTopWidthProps<T = BorderTopWidthProperty> {
  /**
   * The **`border-top-width`** CSS property sets the width of the top border of an element.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-width
   */
  [BORDERTOPWIDTH]: T;
}

export const createBorderTopWidth = <
  T = BorderTopWidthProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<BorderTopWidthProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<BorderTopWidthProps<T>, Theme, Media>({
    cssProp: BORDERTOPWIDTH,
    prop: BORDERTOPWIDTH,
    key,
    transform,
  });

export const createBorderTopWidthRule = <
  T = BorderTopWidthProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERTOPWIDTH, getValue: transformer });

export const borderTopWidth = createBorderTopWidth();

export const borderTopWidthRule = createBorderTopWidthRule();
