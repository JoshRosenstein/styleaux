import { OffsetProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const OFFSET='offset'

export interface IOffsetProps<T> {
  /**
   * The **`offset`** CSS property is a shorthand property for animating an element along a defined path.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset
   */
  offset: T;
}

export const createOffset = <
  T = OffsetProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IOffsetProps<T>, Theme, Breakpoints>({
    cssProp: OFFSET,
    prop: OFFSET,
    alias,
    key,
    transformValue,
  })

export const createOffsetRule = <T = OffsetProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: OFFSET, getValue: transformer})

export const offset =createOffset()

export const offsetRule =createOffsetRule()
