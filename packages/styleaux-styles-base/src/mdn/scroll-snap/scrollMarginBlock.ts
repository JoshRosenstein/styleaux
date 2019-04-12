import { ScrollMarginBlockProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const SCROLLMARGINBLOCK='scrollMarginBlock'

export interface ScrollMarginBlockProps<T=ScrollMarginBlockProperty> {
  /**
   * The `scroll-margin-block` property is a shorthand property which sets the scroll-margin longhands in the block dimension.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block
   */
  [SCROLLMARGINBLOCK]: T;
}

export const createScrollMarginBlock = <
  T = ScrollMarginBlockProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<ScrollMarginBlockProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<ScrollMarginBlockProps<T>,Theme,Media>({
    cssProp:SCROLLMARGINBLOCK,
    prop:SCROLLMARGINBLOCK,
    key,
    transformValue,
  })

export const createScrollMarginBlockRule = <T = ScrollMarginBlockProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: SCROLLMARGINBLOCK, getValue: transformer})

export const scrollMarginBlock =createScrollMarginBlock()

export const scrollMarginBlockRule =createScrollMarginBlockRule()
