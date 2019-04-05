import { MarginBlockProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const MARGINBLOCK='marginBlock'

export interface IMarginBlockProps<T> {
  /**
   * The **`margin-block`** CSS property defines the logical block start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block
   */
  marginBlock: T;
}

export const createMarginBlock = <
  T = MarginBlockProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IMarginBlockProps<T>, Theme, Breakpoints>({
    cssProp: MARGINBLOCK,
    prop: MARGINBLOCK,
    alias,
    key,
    transformValue,
  })

export const createMarginBlockRule = <T = MarginBlockProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: MARGINBLOCK, getValue: transformer})

export const marginBlock =createMarginBlock()

export const marginBlockRule =createMarginBlockRule()
