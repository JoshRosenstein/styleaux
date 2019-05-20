import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { ListStylePositionProperty } from '@styleaux/csstype';

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
>(
  config: Config<ListStylePositionProps<T>, Theme> = {},
) =>
  style<ListStylePositionProps<T>, Theme, Media>({
    cssProp: LISTSTYLEPOSITION,
    prop: LISTSTYLEPOSITION,
    ...config,
  });

export const createListStylePositionRule = <
  T = ListStylePositionProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: LISTSTYLEPOSITION, getValue: transformer });

export const listStylePosition = createListStylePosition();

export const listStylePositionRule = createListStylePositionRule();
