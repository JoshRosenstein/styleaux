import { AlignItemsProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const ALIGNITEMS = 'alignItems';

export interface AlignItemsProps<T = AlignItemsProperty> {
  /**
   * The CSS **`align-items`** property sets the `align-self` value on all direct children as a group. The align-self property sets the alignment of an item within its containing block. In Flexbox it controls the alignment of items on the Cross Axis, in Grid Layout it controls the alignment of items on the Block Axis within their grid area.
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * |  Chrome  | Firefox |   Safari    |  Edge  |   IE   |
   * | :------: | :-----: | :---------: | :----: | :----: |
   * |  **52**  | **20**  | **7** _-x-_ | **12** | **11** |
   * | 21 _-x-_ |         |             |        |        |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-items
   */
  [ALIGNITEMS]: T;
}

export const createAlignItems = <
  T = AlignItemsProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<AlignItemsProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<AlignItemsProps<T>, Theme, Media>({
    cssProp: ALIGNITEMS,
    prop: ALIGNITEMS,
    key,
    transformValue,
  });

export const createAlignItemsRule = <T = AlignItemsProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: ALIGNITEMS, getValue: transformer });

export const alignItems = createAlignItems();

export const alignItemsRule = createAlignItemsRule();
