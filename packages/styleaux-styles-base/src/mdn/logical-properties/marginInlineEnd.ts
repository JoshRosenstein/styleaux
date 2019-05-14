import { MarginInlineEndProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const MARGININLINEEND = 'marginInlineEnd';

export interface MarginInlineEndProps<T = MarginInlineEndProperty> {
  /**
   * The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * |          Chrome          |        Firefox        |          Safari          | Edge | IE  |
   * | :----------------------: | :-------------------: | :----------------------: | :--: | :-: |
   * |          **69**          |        **41**         |         **12.1**         |  No  | No  |
   * | 2 _(-webkit-margin-end)_ | 3 _(-moz-margin-end)_ | 3 _(-webkit-margin-end)_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-end
   */
  [MARGININLINEEND]: T;
}

export const createMarginInlineEnd = <
  T = MarginInlineEndProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<MarginInlineEndProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<MarginInlineEndProps<T>, Theme, Media>({
    cssProp: MARGININLINEEND,
    prop: MARGININLINEEND,
    key,
    transform,
  });

export const createMarginInlineEndRule = <
  T = MarginInlineEndProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: MARGININLINEEND, getValue: transformer });

export const marginInlineEnd = createMarginInlineEnd();

export const marginInlineEndRule = createMarginInlineEndRule();
