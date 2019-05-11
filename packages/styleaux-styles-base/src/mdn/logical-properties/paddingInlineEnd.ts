import { PaddingInlineEndProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const PADDINGINLINEEND = 'paddingInlineEnd';

export interface PaddingInlineEndProps<T = PaddingInlineEndProperty> {
  /**
   * The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * |          Chrome           |        Firefox         |          Safari           | Edge | IE  |
   * | :-----------------------: | :--------------------: | :-----------------------: | :--: | :-: |
   * |          **69**           |         **41**         |         **12.1**          |  No  | No  |
   * | 2 _(-webkit-padding-end)_ | 3 _(-moz-padding-end)_ | 3 _(-webkit-padding-end)_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-end
   */
  [PADDINGINLINEEND]: T;
}

export const createPaddingInlineEnd = <
  T = PaddingInlineEndProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<PaddingInlineEndProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<PaddingInlineEndProps<T>, Theme, Media>({
    cssProp: PADDINGINLINEEND,
    prop: PADDINGINLINEEND,
    key,
    transformValue,
  });

export const createPaddingInlineEndRule = <
  T = PaddingInlineEndProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: PADDINGINLINEEND, getValue: transformer });

export const paddingInlineEnd = createPaddingInlineEnd();

export const paddingInlineEndRule = createPaddingInlineEndRule();
