import { MarginBlockProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const MARGINBLOCK='marginBlock'

export interface MarginBlockProps<T=MarginBlockProperty> {
  /**
   * The **`margin-block`** CSS property defines the logical block start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block
   */
  [MARGINBLOCK]: T;
}

export const createMarginBlock = <
  T = MarginBlockProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<MarginBlockProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<MarginBlockProps<T>,Theme,Media>({
    cssProp:MARGINBLOCK,
    prop:MARGINBLOCK,
    key,
    transformValue,
  })

export const createMarginBlockRule = <T = MarginBlockProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: MARGINBLOCK, getValue: transformer})

export const marginBlock =createMarginBlock()

export const marginBlockRule =createMarginBlockRule()
