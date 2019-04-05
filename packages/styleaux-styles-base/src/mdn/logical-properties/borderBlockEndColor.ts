import { BorderBlockEndColorProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERBLOCKENDCOLOR='borderBlockEndColor'

export interface IBorderBlockEndColorProps<T> {
  /**
   * The **`border-block-end-color`** CSS property defines the color of the logical block-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-color
   */
  borderBlockEndColor: T;
}

export const createBorderBlockEndColor = <
  T = BorderBlockEndColorProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderBlockEndColorProps<T>, Theme, Breakpoints>({
    cssProp: BORDERBLOCKENDCOLOR,
    prop: BORDERBLOCKENDCOLOR,
    alias,
    key,
    transformValue,
  })

export const createBorderBlockEndColorRule = <T = BorderBlockEndColorProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERBLOCKENDCOLOR, getValue: transformer})

export const borderBlockEndColor =createBorderBlockEndColor()

export const borderBlockEndColorRule =createBorderBlockEndColorRule()
