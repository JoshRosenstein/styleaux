import { ColumnCountProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const COLUMNCOUNT='columnCount'

export interface ColumnCountProps<T=ColumnCountProperty> {
  /**
   * The **`column-count`** CSS property breaks an element's content into the specified number of columns.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-count
   */
  [COLUMNCOUNT]: T;
}

export const createColumnCount = <
  T = ColumnCountProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<ColumnCountProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<ColumnCountProps<T>,Theme,Media>({
    cssProp:COLUMNCOUNT,
    prop:COLUMNCOUNT,
    key,
    transformValue,
  })

export const createColumnCountRule = <T = ColumnCountProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: COLUMNCOUNT, getValue: transformer})

export const columnCount =createColumnCount()

export const columnCountRule =createColumnCountRule()
