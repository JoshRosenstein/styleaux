import { ColumnGapProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const COLUMNGAP = 'columnGap';

export interface ColumnGapProps<T = ColumnGapProperty> {
  /**
   * The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * | Chrome | Firefox |   Safari    | Edge | IE  |
   * | :----: | :-----: | :---------: | :--: | :-: |
   * |   No   | **63**  | **3** _-x-_ | n/a  | No  |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * |     Chrome      |     Firefox     |        Safari         |  Edge  | IE  |
   * | :-------------: | :-------------: | :-------------------: | :----: | :-: |
   * |     **66**      |     **61**      | **10.1** _(grid-gap)_ | **16** | No  |
   * | 57 _(grid-gap)_ | 52 _(grid-gap)_ |                       |        |     |
   *
   * ---
   *
   * _Supported in Multi-column Layout_
   *
   * | Chrome |  Firefox  | Safari  |  Edge  |   IE   |
   * | :----: | :-------: | :-----: | :----: | :----: |
   * | **50** |  **52**   | **10**  | **12** | **10** |
   * |        | 1.5 _-x-_ | 3 _-x-_ |        |        |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-gap
   */
  [COLUMNGAP]: T;
}

export const createColumnGap = <
  T = ColumnGapProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<ColumnGapProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<ColumnGapProps<T>, Theme, Media>({
    cssProp: COLUMNGAP,
    prop: COLUMNGAP,
    key,
    transformValue,
  });

export const createColumnGapRule = <T = ColumnGapProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: COLUMNGAP, getValue: transformer });

export const columnGap = createColumnGap();

export const columnGapRule = createColumnGapRule();
