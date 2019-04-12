import { MarginTopProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const MARGINTOP='marginTop'

export interface MarginTopProps<T=MarginTopProperty> {
  /**
   * The **`margin-top`** CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
   */
  [MARGINTOP]: T;
}

export const createMarginTop = <
  T = MarginTopProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<MarginTopProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<MarginTopProps<T>,Theme,Media>({
    cssProp:MARGINTOP,
    prop:MARGINTOP,
    key,
    transformValue,
  })

export const createMarginTopRule = <T = MarginTopProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: MARGINTOP, getValue: transformer})

export const marginTop =createMarginTop()

export const marginTopRule =createMarginTopRule()
