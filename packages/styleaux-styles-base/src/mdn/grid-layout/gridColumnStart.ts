import { GridColumnStartProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const GRIDCOLUMNSTART = 'gridColumnStart';

export interface GridColumnStartProps<T = GridColumnStartProperty> {
  /**
   * The **`grid-column-start`** CSS property specifies a grid item’s start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-start
   */
  [GRIDCOLUMNSTART]: T;
}

export const createGridColumnStart = <
  T = GridColumnStartProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<GridColumnStartProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<GridColumnStartProps<T>, Theme, Media>({
    cssProp: GRIDCOLUMNSTART,
    prop: GRIDCOLUMNSTART,
    key,
    transform,
  });

export const createGridColumnStartRule = <
  T = GridColumnStartProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: GRIDCOLUMNSTART, getValue: transformer });

export const gridColumnStart = createGridColumnStart();

export const gridColumnStartRule = createGridColumnStartRule();
