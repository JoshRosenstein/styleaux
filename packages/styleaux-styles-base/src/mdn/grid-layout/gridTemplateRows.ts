import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { GridTemplateRowsProperty } from '@styleaux/csstype';

const GRIDTEMPLATEROWS = 'gridTemplateRows';

export interface GridTemplateRowsProps<T = GridTemplateRowsProperty> {
  /**
   * The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the grid rows.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-rows
   */
  [GRIDTEMPLATEROWS]: T;
}

export const createGridTemplateRows = <
  T = GridTemplateRowsProperty,
  Media = never,
  Theme = never
>(
  config: Config<GridTemplateRowsProps<T>, Theme> = {},
) =>
  style<GridTemplateRowsProps<T>, Theme, Media>({
    cssProp: GRIDTEMPLATEROWS,
    prop: GRIDTEMPLATEROWS,
    ...config,
  });

export const createGridTemplateRowsRule = <
  T = GridTemplateRowsProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: GRIDTEMPLATEROWS, getValue: transformer });

export const gridTemplateRows = createGridTemplateRows();

export const gridTemplateRowsRule = createGridTemplateRowsRule();
