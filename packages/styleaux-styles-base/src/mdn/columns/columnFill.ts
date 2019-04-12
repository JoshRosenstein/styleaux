import { ColumnFillProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const COLUMNFILL='columnFill'

export interface ColumnFillProps<T=ColumnFillProperty> {
  /**
   * The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-fill
   */
  [COLUMNFILL]: T;
}

export const createColumnFill = <
  T = ColumnFillProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<ColumnFillProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<ColumnFillProps<T>,Theme,Media>({
    cssProp:COLUMNFILL,
    prop:COLUMNFILL,
    key,
    transformValue,
  })

export const createColumnFillRule = <T = ColumnFillProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: COLUMNFILL, getValue: transformer})

export const columnFill =createColumnFill()

export const columnFillRule =createColumnFillRule()
