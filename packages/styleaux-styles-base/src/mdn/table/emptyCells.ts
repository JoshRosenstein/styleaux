import { EmptyCellsProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const EMPTYCELLS='emptyCells'

export interface EmptyCellsProps<T=EmptyCellsProperty> {
  /**
   * The **`empty-cells`** CSS property sets whether borders and backgrounds appear around `<table>` cells that have no visible content.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/empty-cells
   */
  [EMPTYCELLS]: T;
}

export const createEmptyCells = <
  T = EmptyCellsProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<EmptyCellsProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<EmptyCellsProps<T>,Theme,Media>({
    cssProp:EMPTYCELLS,
    prop:EMPTYCELLS,
    key,
    transformValue,
  })

export const createEmptyCellsRule = <T = EmptyCellsProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: EMPTYCELLS, getValue: transformer})

export const emptyCells =createEmptyCells()

export const emptyCellsRule =createEmptyCellsRule()
