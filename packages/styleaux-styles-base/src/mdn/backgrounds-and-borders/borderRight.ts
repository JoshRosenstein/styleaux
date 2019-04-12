import { BorderRightProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const BORDERRIGHT='borderRight'

export interface BorderRightProps<T=BorderRightProperty> {
  /**
   * The **`border-right`** CSS property is a shorthand that sets the values of `border-right-width`, `border-right-style` and `border-right-color`. These properties set an element's right border.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right
   */
  [BORDERRIGHT]: T;
}

export const createBorderRight = <
  T = BorderRightProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BorderRightProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BorderRightProps<T>,Theme,Media>({
    cssProp:BORDERRIGHT,
    prop:BORDERRIGHT,
    key,
    transformValue,
  })

export const createBorderRightRule = <T = BorderRightProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: BORDERRIGHT, getValue: transformer})

export const borderRight =createBorderRight()

export const borderRightRule =createBorderRightRule()
