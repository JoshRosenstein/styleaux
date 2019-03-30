import { PaddingBlockProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const PADDINGBLOCK='paddingBlock'

export interface IPaddingBlockProps<T> {
  /**
   * The **`padding-block`** CSS property defines the logical block start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block
   */
  paddingBlock: T;
}

export const paddingBlock = <
  T = PaddingBlockProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IPaddingBlockProps<T>, Theme, Breakpoints>({
    cssProp: PADDINGBLOCK,
    prop: PADDINGBLOCK,
    alias,
    key,
    transformValue,
  })

export const paddingBlockRule = <T = PaddingBlockProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: PADDINGBLOCK, getValue: transformer})
