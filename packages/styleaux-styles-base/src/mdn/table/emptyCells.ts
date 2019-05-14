import { EmptyCellsProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const EMPTYCELLS = 'emptyCells';

export interface EmptyCellsProps<T = EmptyCellsProperty> {
  /**
   * The **`empty-cells`** CSS property sets whether borders and backgrounds appear around `<table>` cells that have no visible content.
   *
   * **Initial value**: `show`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/empty-cells
   */
  [EMPTYCELLS]: T;
}

export const createEmptyCells = <
  T = EmptyCellsProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<EmptyCellsProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<EmptyCellsProps<T>, Theme, Media>({
    cssProp: EMPTYCELLS,
    prop: EMPTYCELLS,
    key,
    transform,
  });

export const createEmptyCellsRule = <T = EmptyCellsProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: EMPTYCELLS, getValue: transformer });

export const emptyCells = createEmptyCells();

export const emptyCellsRule = createEmptyCellsRule();
