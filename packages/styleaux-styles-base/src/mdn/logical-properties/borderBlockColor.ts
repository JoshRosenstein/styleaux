import { BorderBlockColorProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERBLOCKCOLOR='borderBlockColor'

export interface IBorderBlockColorProps<T> {
  /**
   * The **`border-block-color`** CSS property defines the color of the logical block borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and `border-bottom-color`, or `border-right-color` and `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-color
   */
  borderBlockColor: T;
}

export const createBorderBlockColor = <
  T = BorderBlockColorProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderBlockColorProps<T>, Theme, Breakpoints>({
    cssProp: BORDERBLOCKCOLOR,
    prop: BORDERBLOCKCOLOR,
    alias,
    key,
    transformValue,
  })

export const createBorderBlockColorRule = <T = BorderBlockColorProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERBLOCKCOLOR, getValue: transformer})

export const borderBlockColor =createBorderBlockColor()

export const borderBlockColorRule =createBorderBlockColorRule()
