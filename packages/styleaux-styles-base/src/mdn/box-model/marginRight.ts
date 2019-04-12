import { MarginRightProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const MARGINRIGHT='marginRight'

export interface MarginRightProps<T=MarginRightProperty> {
  /**
   * The **`margin-right`** CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
   */
  [MARGINRIGHT]: T;
}

export const createMarginRight = <
  T = MarginRightProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<MarginRightProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<MarginRightProps<T>,Theme,Media>({
    cssProp:MARGINRIGHT,
    prop:MARGINRIGHT,
    key,
    transformValue,
  })

export const createMarginRightRule = <T = MarginRightProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: MARGINRIGHT, getValue: transformer})

export const marginRight =createMarginRight()

export const marginRightRule =createMarginRightRule()
