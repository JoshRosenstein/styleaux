import { PaddingRightProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const PADDINGRIGHT='paddingRight'

export interface PaddingRightProps<T=PaddingRightProperty> {
  /**
   * The **`padding-right`** CSS property sets the width of the padding area on the right of an element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
   */
  [PADDINGRIGHT]: T;
}

export const createPaddingRight = <
  T = PaddingRightProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<PaddingRightProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<PaddingRightProps<T>,Theme,Media>({
    cssProp:PADDINGRIGHT,
    prop:PADDINGRIGHT,
    key,
    transformValue,
  })

export const createPaddingRightRule = <T = PaddingRightProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: PADDINGRIGHT, getValue: transformer})

export const paddingRight =createPaddingRight()

export const paddingRightRule =createPaddingRightRule()
