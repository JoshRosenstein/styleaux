import { BorderInlineStartWidthProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERINLINESTARTWIDTH='borderInlineStartWidth'

export interface IBorderInlineStartWidthProps<T> {
  /**
   * The **`border-inline-start-width`** CSS property defines the width of the logical inline-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width
   */
  borderInlineStartWidth: T;
}

export const createBorderInlineStartWidth = <
  T = BorderInlineStartWidthProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderInlineStartWidthProps<T>, Theme, Breakpoints>({
    cssProp: BORDERINLINESTARTWIDTH,
    prop: BORDERINLINESTARTWIDTH,
    alias,
    key,
    transformValue,
  })

export const createBorderInlineStartWidthRule = <T = BorderInlineStartWidthProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERINLINESTARTWIDTH, getValue: transformer})

export const borderInlineStartWidth =createBorderInlineStartWidth()

export const borderInlineStartWidthRule =createBorderInlineStartWidthRule()
