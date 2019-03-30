import { PaddingBlockEndProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const PADDINGBLOCKEND='paddingBlockEnd'

export interface IPaddingBlockEndProps<T> {
  /**
   * The **`padding-block-end`** CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-end
   */
  paddingBlockEnd: T;
}

export const paddingBlockEnd = <
  T = PaddingBlockEndProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IPaddingBlockEndProps<T>, Theme, Breakpoints>({
    cssProp: PADDINGBLOCKEND,
    prop: PADDINGBLOCKEND,
    alias,
    key,
    transformValue,
  })

export const paddingBlockEndRule = <T = PaddingBlockEndProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: PADDINGBLOCKEND, getValue: transformer})
