import { ColumnWidthProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const COLUMNWIDTH='columnWidth'

export interface ColumnWidthProps<T=ColumnWidthProperty> {
  /**
   * The **`column-width`** CSS property specifies the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-width
   */
  [COLUMNWIDTH]: T;
}

export const createColumnWidth = <
  T = ColumnWidthProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<ColumnWidthProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<ColumnWidthProps<T>,Theme,Media>({
    cssProp:COLUMNWIDTH,
    prop:COLUMNWIDTH,
    key,
    transformValue,
  })

export const createColumnWidthRule = <T = ColumnWidthProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: COLUMNWIDTH, getValue: transformer})

export const columnWidth =createColumnWidth()

export const columnWidthRule =createColumnWidthRule()
