import { PaddingBlockProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const PADDINGBLOCK='paddingBlock'

export interface PaddingBlockProps<T=PaddingBlockProperty> {
  /**
   * The **`padding-block`** CSS property defines the logical block start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block
   */
  [PADDINGBLOCK]: T;
}

export const createPaddingBlock = <
  T = PaddingBlockProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<PaddingBlockProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<PaddingBlockProps<T>,Theme,Media>({
    cssProp:PADDINGBLOCK,
    prop:PADDINGBLOCK,
    key,
    transformValue,
  })

export const createPaddingBlockRule = <T = PaddingBlockProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: PADDINGBLOCK, getValue: transformer})

export const paddingBlock =createPaddingBlock()

export const paddingBlockRule =createPaddingBlockRule()
