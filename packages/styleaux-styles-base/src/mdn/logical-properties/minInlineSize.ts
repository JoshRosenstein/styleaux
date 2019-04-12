import { MinInlineSizeProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const MININLINESIZE='minInlineSize'

export interface MinInlineSizeProps<T=MinInlineSizeProperty> {
  /**
   * The **`min-inline-size`** CSS property defines the horizontal or vertical minimal size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-inline-size
   */
  [MININLINESIZE]: T;
}

export const createMinInlineSize = <
  T = MinInlineSizeProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<MinInlineSizeProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<MinInlineSizeProps<T>,Theme,Media>({
    cssProp:MININLINESIZE,
    prop:MININLINESIZE,
    key,
    transformValue,
  })

export const createMinInlineSizeRule = <T = MinInlineSizeProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: MININLINESIZE, getValue: transformer})

export const minInlineSize =createMinInlineSize()

export const minInlineSizeRule =createMinInlineSizeRule()
