import { BorderInlineEndWidthProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BORDERINLINEENDWIDTH = 'borderInlineEndWidth';

export interface BorderInlineEndWidthProps<T = BorderInlineEndWidthProperty> {
  /**
   * The **`border-inline-end-width`** CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width
   */
  [BORDERINLINEENDWIDTH]: T;
}

export const createBorderInlineEndWidth = <
  T = BorderInlineEndWidthProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<
    StyleOptions<BorderInlineEndWidthProps<T>, Theme>,
    'key' | 'transformValue'
  >
> = {}) =>
  style<BorderInlineEndWidthProps<T>, Theme, Media>({
    cssProp: BORDERINLINEENDWIDTH,
    prop: BORDERINLINEENDWIDTH,
    key,
    transformValue,
  });

export const createBorderInlineEndWidthRule = <
  T = BorderInlineEndWidthProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERINLINEENDWIDTH, getValue: transformer });

export const borderInlineEndWidth = createBorderInlineEndWidth();

export const borderInlineEndWidthRule = createBorderInlineEndWidthRule();
