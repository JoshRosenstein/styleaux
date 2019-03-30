import { PlaceSelfProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const PLACESELF='placeSelf'

export interface IPlaceSelfProps<T> {
  /**
   * The **`place-self`** CSS property is a shorthand property sets both the `align-self` and `justify-self` properties. The first value is the `align-self` property value, the second the `justify-self` one. If the second value is not present, the first value is also used for it.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/place-self
   */
  placeSelf: T;
}

export const placeSelf = <
  T = PlaceSelfProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IPlaceSelfProps<T>, Theme, Breakpoints>({
    cssProp: PLACESELF,
    prop: PLACESELF,
    alias,
    key,
    transformValue,
  })

export const placeSelfRule = <T = PlaceSelfProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: PLACESELF, getValue: transformer})
