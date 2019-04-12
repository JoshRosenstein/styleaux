import { ColumnGapProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const COLUMNGAP='columnGap'

export interface ColumnGapProps<T=ColumnGapProperty> {
  /**
   * The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-gap
   */
  [COLUMNGAP]: T;
}

export const createColumnGap = <
  T = ColumnGapProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<ColumnGapProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<ColumnGapProps<T>,Theme,Media>({
    cssProp:COLUMNGAP,
    prop:COLUMNGAP,
    key,
    transformValue,
  })

export const createColumnGapRule = <T = ColumnGapProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: COLUMNGAP, getValue: transformer})

export const columnGap =createColumnGap()

export const columnGapRule =createColumnGapRule()
