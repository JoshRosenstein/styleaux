import { ListStylePositionProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const LISTSTYLEPOSITION = 'listStylePosition';

export interface ListStylePositionProps<T = ListStylePositionProperty> {
  /**
   * The **`list-style-position`** CSS property sets the position of the `::marker` relative to a list item.
   *
   * **Initial value**: `outside`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-position
   */
  [LISTSTYLEPOSITION]: T;
}

export const createListStylePosition = <
  T = ListStylePositionProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<ListStylePositionProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<ListStylePositionProps<T>, Theme, Media>({
    cssProp: LISTSTYLEPOSITION,
    prop: LISTSTYLEPOSITION,
    key,
    transform,
  });

export const createListStylePositionRule = <
  T = ListStylePositionProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: LISTSTYLEPOSITION, getValue: transformer });

export const listStylePosition = createListStylePosition();

export const listStylePositionRule = createListStylePositionRule();
