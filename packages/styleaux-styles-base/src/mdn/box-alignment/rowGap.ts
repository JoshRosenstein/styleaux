import { RowGapProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const ROWGAP = 'rowGap';

export interface RowGapProps<T = RowGapProperty> {
  /**
   * The **`row-gap`** CSS property sets the size of the gap (gutter) between an element's grid rows.
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **63**  |   No   | n/a  | No  |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * |       Chrome        |       Firefox       |          Safari           |  Edge  | IE  |
   * | :-----------------: | :-----------------: | :-----------------------: | :----: | :-: |
   * |       **66**        |       **61**        | **10.1** _(grid-row-gap)_ | **16** | No  |
   * | 57 _(grid-row-gap)_ | 52 _(grid-row-gap)_ |                           |        |     |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/row-gap
   */
  [ROWGAP]: T;
}

export const createRowGap = <T = RowGapProperty, Media = never, Theme = never>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<RowGapProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<RowGapProps<T>, Theme, Media>({
    cssProp: ROWGAP,
    prop: ROWGAP,
    key,
    transform,
  });

export const createRowGapRule = <T = RowGapProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: ROWGAP, getValue: transformer });

export const rowGap = createRowGap();

export const rowGapRule = createRowGapRule();
