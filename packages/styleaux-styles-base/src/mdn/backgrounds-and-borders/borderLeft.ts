import { BorderLeftProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BORDERLEFT='borderLeft'

export interface IBorderLeftProps<T> {
  /**
   * The **`border-left`** CSS property is a shorthand that sets the values of `border-left-width`, `border-left-style` and `border-left-color`. These properties set an element's left border.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left
   */
  borderLeft: T;
}

export const createBorderLeft = <
  T = BorderLeftProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBorderLeftProps<T>, Theme, Breakpoints>({
    cssProp: BORDERLEFT,
    prop: BORDERLEFT,
    alias,
    key,
    transformValue,
  })

export const createBorderLeftRule = <T = BorderLeftProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BORDERLEFT, getValue: transformer})

export const borderLeft =createBorderLeft()

export const borderLeftRule =createBorderLeftRule()
