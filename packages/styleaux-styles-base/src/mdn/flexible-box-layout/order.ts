import { OrderProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const ORDER='order'

export interface IOrderProps<T> {
  /**
   * The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/order
   */
  order: T;
}

export const createOrder = <
  T = OrderProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IOrderProps<T>, Theme, Breakpoints>({
    cssProp: ORDER,
    prop: ORDER,
    alias,
    key,
    transformValue,
  })

export const createOrderRule = <T = OrderProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: ORDER, getValue: transformer})

export const order =createOrder()

export const orderRule =createOrderRule()
