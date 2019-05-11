import { BorderInlineColorProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BORDERINLINECOLOR = 'borderInlineColor';

export interface BorderInlineColorProps<T = BorderInlineColorProperty> {
  /**
   * The **`border-inline-color`** CSS property defines the color of the logical inline borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and `border-bottom-color`, or `border-right-color` and `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-color
   */
  [BORDERINLINECOLOR]: T;
}

export const createBorderInlineColor = <
  T = BorderInlineColorProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<BorderInlineColorProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<BorderInlineColorProps<T>, Theme, Media>({
    cssProp: BORDERINLINECOLOR,
    prop: BORDERINLINECOLOR,
    key,
    transformValue,
  });

export const createBorderInlineColorRule = <
  T = BorderInlineColorProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERINLINECOLOR, getValue: transformer });

export const borderInlineColor = createBorderInlineColor();

export const borderInlineColorRule = createBorderInlineColorRule();
