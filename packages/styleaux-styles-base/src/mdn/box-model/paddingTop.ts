import { PaddingTopProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const PADDINGTOP='paddingTop'

export interface PaddingTopProps<T=PaddingTopProperty> {
  /**
   * The **`padding-top`** CSS property sets the height of the padding area on the top of an element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
   */
  [PADDINGTOP]: T;
}

export const createPaddingTop = <
  T = PaddingTopProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<PaddingTopProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<PaddingTopProps<T>,Theme,Media>({
    cssProp:PADDINGTOP,
    prop:PADDINGTOP,
    key,
    transformValue,
  })

export const createPaddingTopRule = <T = PaddingTopProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: PADDINGTOP, getValue: transformer})

export const paddingTop =createPaddingTop()

export const paddingTopRule =createPaddingTopRule()
