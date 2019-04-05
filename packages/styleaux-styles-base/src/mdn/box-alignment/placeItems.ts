import { PlaceItemsProperty } from '@styleaux/csstype';

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

export const createPlaceItems = <
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

export const createPlaceItemsRule = <T = PlaceItemsProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: PLACEITEMS, getValue: transformer})

export const placeItems =createPlaceItems()

export const placeItemsRule =createPlaceItemsRule()
