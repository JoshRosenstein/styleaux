import { MarginInlineEndProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const MARGININLINEEND='marginInlineEnd'

export interface MarginInlineEndProps<T=MarginInlineEndProperty> {
  /**
   * The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-end
   */
  [MARGININLINEEND]: T;
}

export const createMarginInlineEnd = <
  T = MarginInlineEndProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<MarginInlineEndProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<MarginInlineEndProps<T>,Theme,Media>({
    cssProp:MARGININLINEEND,
    prop:MARGININLINEEND,
    key,
    transformValue,
  })

export const createMarginInlineEndRule = <T = MarginInlineEndProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: MARGININLINEEND, getValue: transformer})

export const marginInlineEnd =createMarginInlineEnd()

export const marginInlineEndRule =createMarginInlineEndRule()
