import { Config } from '../../types';
import { GridAutoFlowProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const GRIDAUTOFLOW = 'gridAutoFlow';

export interface GridAutoFlowProps<T = GridAutoFlowProperty> {
  /**
   * The **`grid-auto-flow`** CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.
   *
   * **Initial value**: `row`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow
   */
  [GRIDAUTOFLOW]: T;
}

export const createGridAutoFlow = <
  T = GridAutoFlowProperty,
  Media = never,
  Theme = never
>(
  config: Config<GridAutoFlowProps<T>, Theme> = {},
) =>
  style<GridAutoFlowProps<T>, Theme, Media>({
    cssProp: GRIDAUTOFLOW,
    prop: GRIDAUTOFLOW,
    ...config,
  });

export const createGridAutoFlowRule = <T = GridAutoFlowProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: GRIDAUTOFLOW, getValue: transformer });

export const gridAutoFlow = createGridAutoFlow();

export const gridAutoFlowRule = createGridAutoFlowRule();
