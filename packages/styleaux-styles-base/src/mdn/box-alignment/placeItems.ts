import { PlaceItemsProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const PLACEITEMS='placeItems'

export interface IPlaceItemsProps<T> {
  /**
   * The CSS **`place-items`** shorthand property sets the `align-items` and `justify-items` properties, respectively. If the second value is not set, the first value is also used for it.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/place-items
   */
  placeItems: T;
}

export const placeItems = <
  T = PlaceItemsProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IPlaceItemsProps<T>, Theme, Breakpoints>({
    cssProp: PLACEITEMS,
    prop: PLACEITEMS,
    alias,
    key,
    transformValue,
  })

export const placeItemsRule = <T = PlaceItemsProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: PLACEITEMS, getValue: transformer})
