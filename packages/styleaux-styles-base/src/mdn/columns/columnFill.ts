import { Config } from '../../types';
import { ColumnFillProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const COLUMNFILL = 'columnFill';

export interface ColumnFillProps<T = ColumnFillProperty> {
  /**
   * The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.
   *
   * **Initial value**: `balance`
   *
   * | Chrome | Firefox  | Safari |  Edge  |   IE   |
   * | :----: | :------: | :----: | :----: | :----: |
   * | **50** |  **52**  |  n/a   | **12** | **10** |
   * |        | 13 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-fill
   */
  [COLUMNFILL]: T;
}

export const createColumnFill = <
  T = ColumnFillProperty,
  Media = never,
  Theme = never
>(
  config: Config<ColumnFillProps<T>, Theme> = {},
) =>
  style<ColumnFillProps<T>, Theme, Media>({
    cssProp: COLUMNFILL,
    prop: COLUMNFILL,
    ...config,
  });

export const createColumnFillRule = <T = ColumnFillProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: COLUMNFILL, getValue: transformer });

export const columnFill = createColumnFill();

export const columnFillRule = createColumnFillRule();
