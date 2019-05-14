import { FlexGrowProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const FLEXGROW = 'flexGrow';

export interface FlexGrowProps<T = FlexGrowProperty> {
  /**
   * The **`flex-grow`** CSS property sets how much of the available space in the flex container should be assigned to that item (the flex grow factor). If all sibling items have the same flex grow factor, then all items will receive the same share of available space, otherwise it is distributed according to the ratio defined by the different flex grow factors.
   *
   * **Initial value**: `0`
   *
   * |  Chrome  | Firefox |    Safari     |  Edge  |            IE            |
   * | :------: | :-----: | :-----------: | :----: | :----------------------: |
   * |  **29**  | **20**  | **6.1** _-x-_ | **12** |          **11**          |
   * | 21 _-x-_ |         |               |        | 10 _(-ms-flex-positive)_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-grow
   */
  [FLEXGROW]: T;
}

export const createFlexGrow = <
  T = FlexGrowProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<FlexGrowProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<FlexGrowProps<T>, Theme, Media>({
    cssProp: FLEXGROW,
    prop: FLEXGROW,
    key,
    transform,
  });

export const createFlexGrowRule = <T = FlexGrowProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: FLEXGROW, getValue: transformer });

export const flexGrow = createFlexGrow();

export const flexGrowRule = createFlexGrowRule();
