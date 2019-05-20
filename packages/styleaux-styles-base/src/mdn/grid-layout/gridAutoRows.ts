import { Config } from '../../types';
import { GridAutoRowsProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const GRIDAUTOROWS = 'gridAutoRows';

export interface GridAutoRowsProps<T = GridAutoRowsProperty> {
  /**
   * The **`grid-auto-rows`** CSS property specifies the size of an implicitly-created grid row track.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |         Edge         |            IE            |
   * | :----: | :-----: | :------: | :------------------: | :----------------------: |
   * | **57** | **52**  | **10.1** |        **16**        | **10** _(-ms-grid-rows)_ |
   * |        |         |          | 12 _(-ms-grid-rows)_ |                          |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows
   */
  [GRIDAUTOROWS]: T;
}

export const createGridAutoRows = <
  T = GridAutoRowsProperty,
  Media = never,
  Theme = never
>(
  config: Config<GridAutoRowsProps<T>, Theme> = {},
) =>
  style<GridAutoRowsProps<T>, Theme, Media>({
    cssProp: GRIDAUTOROWS,
    prop: GRIDAUTOROWS,
    ...config,
  });

export const createGridAutoRowsRule = <T = GridAutoRowsProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: GRIDAUTOROWS, getValue: transformer });

export const gridAutoRows = createGridAutoRows();

export const gridAutoRowsRule = createGridAutoRowsRule();
