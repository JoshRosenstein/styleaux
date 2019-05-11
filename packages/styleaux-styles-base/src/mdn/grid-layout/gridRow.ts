import { GridRowProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const GRIDROW = 'gridRow';

export interface GridRowProps<T = GridRowProperty> {
  /**
   * The **`grid-row`** CSS property is a shorthand property for `grid-row-start` and `grid-row-end` specifying a grid item’s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row
   */
  [GRIDROW]: T;
}

export const createGridRow = <
  T = GridRowProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<GridRowProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<GridRowProps<T>, Theme, Media>({
    cssProp: GRIDROW,
    prop: GRIDROW,
    key,
    transformValue,
  });

export const createGridRowRule = <T = GridRowProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: GRIDROW, getValue: transformer });

export const gridRow = createGridRow();

export const gridRowRule = createGridRowRule();
