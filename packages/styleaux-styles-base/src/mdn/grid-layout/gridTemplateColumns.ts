import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { GridTemplateColumnsProperty } from '@styleaux/csstype';

const GRIDTEMPLATECOLUMNS = 'gridTemplateColumns';

export interface GridTemplateColumnsProps<T = GridTemplateColumnsProperty> {
  /**
   * The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the grid columns.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-columns
   */
  [GRIDTEMPLATECOLUMNS]: T;
}

export const createGridTemplateColumns = <
  T = GridTemplateColumnsProperty,
  Media = never,
  Theme = never
>(
  config: Config<GridTemplateColumnsProps<T>, Theme> = {},
) =>
  style<GridTemplateColumnsProps<T>, Theme, Media>({
    cssProp: GRIDTEMPLATECOLUMNS,
    prop: GRIDTEMPLATECOLUMNS,
    ...config,
  });

export const createGridTemplateColumnsRule = <
  T = GridTemplateColumnsProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: GRIDTEMPLATECOLUMNS, getValue: transformer });

export const gridTemplateColumns = createGridTemplateColumns();

export const gridTemplateColumnsRule = createGridTemplateColumnsRule();
