import { PaddingInlineProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const PADDINGINLINE='paddingInline'

export interface PaddingInlineProps<T=PaddingInlineProperty> {
  /**
   * The **`padding-inline`** CSS property defines the logical inline start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline
   */
  [PADDINGINLINE]: T;
}

export const createPaddingInline = <
  T = PaddingInlineProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<PaddingInlineProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<PaddingInlineProps<T>,Theme,Media>({
    cssProp:PADDINGINLINE,
    prop:PADDINGINLINE,
    key,
    transformValue,
  })

export const createPaddingInlineRule = <T = PaddingInlineProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: PADDINGINLINE, getValue: transformer})

export const paddingInline =createPaddingInline()

export const paddingInlineRule =createPaddingInlineRule()
