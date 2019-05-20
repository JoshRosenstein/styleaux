import { Config } from '../../types';
import { OrderProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const ORDER = 'order';

export interface OrderProps<T = OrderProperty> {
  /**
   * The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.
   *
   * **Initial value**: `0`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |    IE    |
   * | :------: | :-----: | :-----: | :----: | :------: |
   * |  **29**  | **20**  |  **9**  | **12** |  **11**  |
   * | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/order
   */
  [ORDER]: T;
}

export const createOrder = <T = OrderProperty, Media = never, Theme = never>(
  config: Config<OrderProps<T>, Theme> = {},
) =>
  style<OrderProps<T>, Theme, Media>({
    cssProp: ORDER,
    prop: ORDER,
    ...config,
  });

export const createOrderRule = <T = OrderProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: ORDER, getValue: transformer });

export const order = createOrder();

export const orderRule = createOrderRule();
