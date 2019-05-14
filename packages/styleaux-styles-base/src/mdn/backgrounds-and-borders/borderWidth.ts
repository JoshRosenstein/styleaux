import { BorderWidthProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BORDERWIDTH = 'borderWidth';

export interface BorderWidthProps<T = BorderWidthProperty> {
  /**
   * The **`border-width`** shorthand CSS property sets the widths of all four sides of an element's border.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-width
   */
  [BORDERWIDTH]: T;
}

export const createBorderWidth = <
  T = BorderWidthProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<BorderWidthProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<BorderWidthProps<T>, Theme, Media>({
    cssProp: BORDERWIDTH,
    prop: BORDERWIDTH,
    key,
    transform,
  });

export const createBorderWidthRule = <T = BorderWidthProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERWIDTH, getValue: transformer });

export const borderWidth = createBorderWidth();

export const borderWidthRule = createBorderWidthRule();
