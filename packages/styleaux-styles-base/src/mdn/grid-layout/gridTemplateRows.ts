import { GridTemplateRowsProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const GRIDTEMPLATEROWS='gridTemplateRows'

export interface GridTemplateRowsProps<T=GridTemplateRowsProperty> {
  /**
   * The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the grid rows.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-rows
   */
  [GRIDTEMPLATEROWS]: T;
}

export const createGridTemplateRows = <
  T = GridTemplateRowsProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<GridTemplateRowsProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<GridTemplateRowsProps<T>,Theme,Media>({
    cssProp:GRIDTEMPLATEROWS,
    prop:GRIDTEMPLATEROWS,
    key,
    transformValue,
  })

export const createGridTemplateRowsRule = <T = GridTemplateRowsProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: GRIDTEMPLATEROWS, getValue: transformer})

export const gridTemplateRows =createGridTemplateRows()

export const gridTemplateRowsRule =createGridTemplateRowsRule()
