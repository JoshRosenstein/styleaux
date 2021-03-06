import { Config } from '../../types';
import { ColumnsProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const COLUMNS = 'columns';

export interface ColumnsProps<T = ColumnsProperty> {
  /**
   * The **`columns`** CSS property sets the column width and column count of an element.
   *
   * | Chrome | Firefox |   Safari    |  Edge  |   IE   |
   * | :----: | :-----: | :---------: | :----: | :----: |
   * | **50** | **52**  | **3** _-x-_ | **12** | **10** |
   * |        | 9 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/columns
   */
  [COLUMNS]: T;
}

export const createColumns = <
  T = ColumnsProperty,
  Media = never,
  Theme = never
>(
  config: Config<ColumnsProps<T>, Theme> = {},
) =>
  style<ColumnsProps<T>, Theme, Media>({
    cssProp: COLUMNS,
    prop: COLUMNS,
    ...config,
  });

export const createColumnsRule = <T = ColumnsProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: COLUMNS, getValue: transformer });

export const columns = createColumns();

export const columnsRule = createColumnsRule();
