import { MarginLeftProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const MARGINLEFT='marginLeft'

export interface MarginLeftProps<T=MarginLeftProperty> {
  /**
   * The **`margin-left`** CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
   */
  [MARGINLEFT]: T;
}

export const createMarginLeft = <
  T = MarginLeftProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<MarginLeftProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<MarginLeftProps<T>,Theme,Media>({
    cssProp:MARGINLEFT,
    prop:MARGINLEFT,
    key,
    transformValue,
  })

export const createMarginLeftRule = <T = MarginLeftProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: MARGINLEFT, getValue: transformer})

export const marginLeft =createMarginLeft()

export const marginLeftRule =createMarginLeftRule()
