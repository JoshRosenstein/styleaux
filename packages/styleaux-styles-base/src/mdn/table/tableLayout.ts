import { TableLayoutProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const TABLELAYOUT = 'tableLayout';

export interface TableLayoutProps<T = TableLayoutProperty> {
  /**
   * The **`table-layout`** CSS property sets the algorithm used to lay out `<table>` cells, rows, and columns.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **14** |  **1**  | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/table-layout
   */
  [TABLELAYOUT]: T;
}

export const createTableLayout = <
  T = TableLayoutProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<TableLayoutProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<TableLayoutProps<T>, Theme, Media>({
    cssProp: TABLELAYOUT,
    prop: TABLELAYOUT,
    key,
    transformValue,
  });

export const createTableLayoutRule = <T = TableLayoutProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TABLELAYOUT, getValue: transformer });

export const tableLayout = createTableLayout();

export const tableLayoutRule = createTableLayoutRule();
