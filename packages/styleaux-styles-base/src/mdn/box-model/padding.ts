import { PaddingProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const PADDING='padding'

export interface PaddingProps<T=PaddingProperty> {
  /**
   * The **`padding`** CSS property sets the padding area on all four sides of an element. It is a shorthand for `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding
   */
  [PADDING]: T;
}

export const createPadding = <
  T = PaddingProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<PaddingProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<PaddingProps<T>,Theme,Media>({
    cssProp:PADDING,
    prop:PADDING,
    key,
    transformValue,
  })

export const createPaddingRule = <T = PaddingProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: PADDING, getValue: transformer})

export const padding =createPadding()

export const paddingRule =createPaddingRule()
