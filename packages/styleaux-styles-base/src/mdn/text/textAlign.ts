import { TextAlignProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const TEXTALIGN = 'textAlign';

export interface TextAlignProps<T = TextAlignProperty> {
  /**
   * The **`text-align`** CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like `vertical-align` but in the horizontal direction.
   *
   * **Initial value**: `start`, or a nameless value that acts as `left` if _direction_ is `ltr`, `right` if _direction_ is `rtl` if `start` is not supported by the browser.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align
   */
  [TEXTALIGN]: T;
}

export const createTextAlign = <
  T = TextAlignProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<TextAlignProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<TextAlignProps<T>, Theme, Media>({
    cssProp: TEXTALIGN,
    prop: TEXTALIGN,
    key,
    transform,
  });

export const createTextAlignRule = <T = TextAlignProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TEXTALIGN, getValue: transformer });

export const textAlign = createTextAlign();

export const textAlignRule = createTextAlignRule();
