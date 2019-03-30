import { BorderBlockWidthProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERBLOCKWIDTH='borderBlockWidth'

export interface IBorderBlockWidthProps<T> {
  /**
   * The **`border-block-width`** CSS property defines the width of the logical block borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and `border-bottom-width`, or `border-left-width`, and `border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-width
   */
  borderBlockWidth: T;
}

export const borderBlockWidth = <
  T = BorderBlockWidthProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderBlockWidthProps<T>, Theme, Breakpoints>({
    cssProp: BORDERBLOCKWIDTH,
    prop: BORDERBLOCKWIDTH,
    alias,
    key,
    transformValue,
  })

export const borderBlockWidthRule = <T = BorderBlockWidthProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERBLOCKWIDTH, getValue: transformer})
