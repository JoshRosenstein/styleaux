import { VerticalAlignProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const VERTICALALIGN='verticalAlign'

export interface VerticalAlignProps<T=VerticalAlignProperty> {
  /**
   * The **`vertical-align`** CSS property sets vertical alignment of an inline or table-cell box.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/vertical-align
   */
  [VERTICALALIGN]: T;
}

export const createVerticalAlign = <
  T = VerticalAlignProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<VerticalAlignProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<VerticalAlignProps<T>,Theme,Media>({
    cssProp:VERTICALALIGN,
    prop:VERTICALALIGN,
    key,
    transformValue,
  })

export const createVerticalAlignRule = <T = VerticalAlignProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: VERTICALALIGN, getValue: transformer})

export const verticalAlign =createVerticalAlign()

export const verticalAlignRule =createVerticalAlignRule()
