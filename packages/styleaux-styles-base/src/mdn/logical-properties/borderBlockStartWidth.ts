import { BorderBlockStartWidthProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERBLOCKSTARTWIDTH='borderBlockStartWidth'

export interface IBorderBlockStartWidthProps<T> {
  /**
   * The **`border-block-start-width`** CSS property defines the width of the logical block-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-width
   */
  borderBlockStartWidth: T;
}

export const createBorderBlockStartWidth = <
  T = BorderBlockStartWidthProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderBlockStartWidthProps<T>, Theme, Breakpoints>({
    cssProp: BORDERBLOCKSTARTWIDTH,
    prop: BORDERBLOCKSTARTWIDTH,
    alias,
    key,
    transformValue,
  })

export const createBorderBlockStartWidthRule = <T = BorderBlockStartWidthProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERBLOCKSTARTWIDTH, getValue: transformer})

export const borderBlockStartWidth =createBorderBlockStartWidth()

export const borderBlockStartWidthRule =createBorderBlockStartWidthRule()
