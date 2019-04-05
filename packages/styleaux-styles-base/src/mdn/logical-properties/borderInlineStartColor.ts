import { BorderInlineStartColorProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERINLINESTARTCOLOR='borderInlineStartColor'

export interface IBorderInlineStartColorProps<T> {
  /**
   * The **`border-inline-start-color`** CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color
   */
  borderInlineStartColor: T;
}

export const createBorderInlineStartColor = <
  T = BorderInlineStartColorProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderInlineStartColorProps<T>, Theme, Breakpoints>({
    cssProp: BORDERINLINESTARTCOLOR,
    prop: BORDERINLINESTARTCOLOR,
    alias,
    key,
    transformValue,
  })

export const createBorderInlineStartColorRule = <T = BorderInlineStartColorProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERINLINESTARTCOLOR, getValue: transformer})

export const borderInlineStartColor =createBorderInlineStartColor()

export const borderInlineStartColorRule =createBorderInlineStartColorRule()
