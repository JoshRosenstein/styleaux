import { OrderProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const ORDER='order'

export interface OrderProps<T=OrderProperty> {
  /**
   * The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/order
   */
  [ORDER]: T;
}

export const createOrder = <
  T = OrderProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<OrderProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<OrderProps<T>,Theme,Media>({
    cssProp:ORDER,
    prop:ORDER,
    key,
    transformValue,
  })

export const createOrderRule = <T = OrderProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: ORDER, getValue: transformer})

export const order =createOrder()

export const orderRule =createOrderRule()
