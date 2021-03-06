import { Config } from '../../types';
import { ColumnCountProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const COLUMNCOUNT = 'columnCount';

export interface ColumnCountProps<T = ColumnCountProperty> {
  /**
   * The **`column-count`** CSS property breaks an element's content into the specified number of columns.
   *
   * **Initial value**: `auto`
   *
   * | Chrome |  Firefox  |   Safari    |  Edge  |   IE   |
   * | :----: | :-------: | :---------: | :----: | :----: |
   * | **50** |  **52**   | **3** _-x-_ | **12** | **10** |
   * |        | 1.5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-count
   */
  [COLUMNCOUNT]: T;
}

export const createColumnCount = <
  T = ColumnCountProperty,
  Media = never,
  Theme = never
>(
  config: Config<ColumnCountProps<T>, Theme> = {},
) =>
  style<ColumnCountProps<T>, Theme, Media>({
    cssProp: COLUMNCOUNT,
    prop: COLUMNCOUNT,
    ...config,
  });

export const createColumnCountRule = <T = ColumnCountProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: COLUMNCOUNT, getValue: transformer });

export const columnCount = createColumnCount();

export const columnCountRule = createColumnCountRule();
