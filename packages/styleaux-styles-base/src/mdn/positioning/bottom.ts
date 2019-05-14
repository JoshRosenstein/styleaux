import { BottomProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BOTTOM = 'bottom';

export interface BottomProps<T = BottomProperty> {
  /**
   * The **`bottom`** CSS property participates in specifying the vertical position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/bottom
   */
  [BOTTOM]: T;
}

export const createBottom = <T = BottomProperty, Media = never, Theme = never>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<BottomProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<BottomProps<T>, Theme, Media>({
    cssProp: BOTTOM,
    prop: BOTTOM,
    key,
    transform,
  });

export const createBottomRule = <T = BottomProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BOTTOM, getValue: transformer });

export const bottom = createBottom();

export const bottomRule = createBottomRule();
