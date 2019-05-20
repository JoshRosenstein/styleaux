import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { GridAutoColumnsProperty } from '@styleaux/csstype';

const GRIDAUTOCOLUMNS = 'gridAutoColumns';

export interface GridAutoColumnsProps<T = GridAutoColumnsProperty> {
  /**
   * The **`grid-auto-columns`** CSS property specifies the size of an implicitly-created grid column track.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |          Edge           |             IE              |
   * | :----: | :-----: | :------: | :---------------------: | :-------------------------: |
   * | **57** | **52**  | **10.1** |         **16**          | **10** _(-ms-grid-columns)_ |
   * |        |         |          | 12 _(-ms-grid-columns)_ |                             |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns
   */
  [GRIDAUTOCOLUMNS]: T;
}

export const createGridAutoColumns = <
  T = GridAutoColumnsProperty,
  Media = never,
  Theme = never
>(
  config: Config<GridAutoColumnsProps<T>, Theme> = {},
) =>
  style<GridAutoColumnsProps<T>, Theme, Media>({
    cssProp: GRIDAUTOCOLUMNS,
    prop: GRIDAUTOCOLUMNS,
    ...config,
  });

export const createGridAutoColumnsRule = <
  T = GridAutoColumnsProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: GRIDAUTOCOLUMNS, getValue: transformer });

export const gridAutoColumns = createGridAutoColumns();

export const gridAutoColumnsRule = createGridAutoColumnsRule();
