import { GridAutoFlowProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const GRIDAUTOFLOW='gridAutoFlow'

export interface GridAutoFlowProps<T=GridAutoFlowProperty> {
  /**
   * The **`grid-auto-flow`** CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow
   */
  [GRIDAUTOFLOW]: T;
}

export const createGridAutoFlow = <
  T = GridAutoFlowProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<GridAutoFlowProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<GridAutoFlowProps<T>,Theme,Media>({
    cssProp:GRIDAUTOFLOW,
    prop:GRIDAUTOFLOW,
    key,
    transformValue,
  })

export const createGridAutoFlowRule = <T = GridAutoFlowProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: GRIDAUTOFLOW, getValue: transformer})

export const gridAutoFlow =createGridAutoFlow()

export const gridAutoFlowRule =createGridAutoFlowRule()
