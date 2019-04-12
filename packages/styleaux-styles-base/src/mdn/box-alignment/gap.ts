import { GapProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const GAP='gap'

export interface GapProps<T=GapProperty> {
  /**
   * The **`gap`** CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/gap
   */
  [GAP]: T;
}

export const createGap = <
  T = GapProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<GapProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<GapProps<T>,Theme,Media>({
    cssProp:GAP,
    prop:GAP,
    key,
    transformValue,
  })

export const createGapRule = <T = GapProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: GAP, getValue: transformer})

export const gap =createGap()

export const gapRule =createGapRule()
