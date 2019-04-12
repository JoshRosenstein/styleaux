import { InlineSizeProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const INLINESIZE='inlineSize'

export interface InlineSizeProps<T=InlineSizeProperty> {
  /**
   * The **`inline-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inline-size
   */
  [INLINESIZE]: T;
}

export const createInlineSize = <
  T = InlineSizeProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<InlineSizeProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<InlineSizeProps<T>,Theme,Media>({
    cssProp:INLINESIZE,
    prop:INLINESIZE,
    key,
    transformValue,
  })

export const createInlineSizeRule = <T = InlineSizeProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: INLINESIZE, getValue: transformer})

export const inlineSize =createInlineSize()

export const inlineSizeRule =createInlineSizeRule()
