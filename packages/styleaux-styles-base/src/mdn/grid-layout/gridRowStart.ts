import { Config } from '../../types';
import { GridRowStartProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const GRIDROWSTART = 'gridRowStart';

export interface GridRowStartProps<T = GridRowStartProperty> {
  /**
   * The **`grid-row-start`** CSS property specifies a grid item’s start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-start
   */
  [GRIDROWSTART]: T;
}

export const createGridRowStart = <
  T = GridRowStartProperty,
  Media = never,
  Theme = never
>(
  config: Config<GridRowStartProps<T>, Theme> = {},
) =>
  style<GridRowStartProps<T>, Theme, Media>({
    cssProp: GRIDROWSTART,
    prop: GRIDROWSTART,
    ...config,
  });

export const createGridRowStartRule = <T = GridRowStartProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: GRIDROWSTART, getValue: transformer });

export const gridRowStart = createGridRowStart();

export const gridRowStartRule = createGridRowStartRule();
