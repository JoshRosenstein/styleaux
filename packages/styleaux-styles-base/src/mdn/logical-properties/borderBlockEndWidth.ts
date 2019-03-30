import { BorderBlockEndWidthProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERBLOCKENDWIDTH='borderBlockEndWidth'

export interface IBorderBlockEndWidthProps<T> {
  /**
   * The **`border-block-end-width`** CSS property defines the width of the logical block-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-width
   */
  borderBlockEndWidth: T;
}

export const borderBlockEndWidth = <
  T = BorderBlockEndWidthProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderBlockEndWidthProps<T>, Theme, Breakpoints>({
    cssProp: BORDERBLOCKENDWIDTH,
    prop: BORDERBLOCKENDWIDTH,
    alias,
    key,
    transformValue,
  })

export const borderBlockEndWidthRule = <T = BorderBlockEndWidthProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERBLOCKENDWIDTH, getValue: transformer})
