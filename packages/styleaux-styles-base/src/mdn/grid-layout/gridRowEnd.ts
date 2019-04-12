import { GridRowEndProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const GRIDROWEND='gridRowEnd'

export interface GridRowEndProps<T=GridRowEndProperty> {
  /**
   * The **`grid-row-end`** CSS property specifies a grid item’s end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its grid area.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-end
   */
  [GRIDROWEND]: T;
}

export const createGridRowEnd = <
  T = GridRowEndProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<GridRowEndProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<GridRowEndProps<T>,Theme,Media>({
    cssProp:GRIDROWEND,
    prop:GRIDROWEND,
    key,
    transformValue,
  })

export const createGridRowEndRule = <T = GridRowEndProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: GRIDROWEND, getValue: transformer})

export const gridRowEnd =createGridRowEnd()

export const gridRowEndRule =createGridRowEndRule()
