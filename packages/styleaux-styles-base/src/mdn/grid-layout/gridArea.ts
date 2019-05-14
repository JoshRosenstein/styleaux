import { GridAreaProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const GRIDAREA = 'gridArea';

export interface GridAreaProps<T = GridAreaProperty> {
  /**
   * The **`grid-area`** CSS property is a shorthand property for `grid-row-start`, `grid-column-start`, `grid-row-end` and `grid-column-end`, specifying a grid item’s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-area
   */
  [GRIDAREA]: T;
}

export const createGridArea = <
  T = GridAreaProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<GridAreaProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<GridAreaProps<T>, Theme, Media>({
    cssProp: GRIDAREA,
    prop: GRIDAREA,
    key,
    transform,
  });

export const createGridAreaRule = <T = GridAreaProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: GRIDAREA, getValue: transformer });

export const gridArea = createGridArea();

export const gridAreaRule = createGridAreaRule();
