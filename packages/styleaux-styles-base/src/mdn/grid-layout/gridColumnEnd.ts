import { GridColumnEndProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const GRIDCOLUMNEND='gridColumnEnd'

export interface GridColumnEndProps<T=GridColumnEndProperty> {
  /**
   * The **`grid-column-end`** CSS property specifies a grid item’s end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-end
   */
  [GRIDCOLUMNEND]: T;
}

export const createGridColumnEnd = <
  T = GridColumnEndProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<GridColumnEndProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<GridColumnEndProps<T>,Theme,Media>({
    cssProp:GRIDCOLUMNEND,
    prop:GRIDCOLUMNEND,
    key,
    transformValue,
  })

export const createGridColumnEndRule = <T = GridColumnEndProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: GRIDCOLUMNEND, getValue: transformer})

export const gridColumnEnd =createGridColumnEnd()

export const gridColumnEndRule =createGridColumnEndRule()
