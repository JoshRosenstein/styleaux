import { PaddingBottomProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const PADDINGBOTTOM = 'paddingBottom';

export interface PaddingBottomProps<T = PaddingBottomProperty> {
  /**
   * The **`padding-bottom`** CSS property sets the height of the padding area on the bottom of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   */
  [PADDINGBOTTOM]: T;
}

export const createPaddingBottom = <
  T = PaddingBottomProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<PaddingBottomProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<PaddingBottomProps<T>, Theme, Media>({
    cssProp: PADDINGBOTTOM,
    prop: PADDINGBOTTOM,
    key,
    transformValue,
  });

export const createPaddingBottomRule = <T = PaddingBottomProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: PADDINGBOTTOM, getValue: transformer });

export const paddingBottom = createPaddingBottom();

export const paddingBottomRule = createPaddingBottomRule();
