import { GridRowStartProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const GRIDROWSTART='gridRowStart'

export interface GridRowStartProps<T=GridRowStartProperty> {
  /**
   * The **`grid-row-start`** CSS property specifies a grid item’s start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-start
   */
  [GRIDROWSTART]: T;
}

export const createGridRowStart = <
  T = GridRowStartProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<GridRowStartProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<GridRowStartProps<T>,Theme,Media>({
    cssProp:GRIDROWSTART,
    prop:GRIDROWSTART,
    key,
    transformValue,
  })

export const createGridRowStartRule = <T = GridRowStartProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: GRIDROWSTART, getValue: transformer})

export const gridRowStart =createGridRowStart()

export const gridRowStartRule =createGridRowStartRule()
