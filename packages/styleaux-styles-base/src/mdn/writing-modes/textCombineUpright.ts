import { TextCombineUprightProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const TEXTCOMBINEUPRIGHT='textCombineUpright'

export interface TextCombineUprightProps<T=TextCombineUprightProperty> {
  /**
   * The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-combine-upright
   */
  [TEXTCOMBINEUPRIGHT]: T;
}

export const createTextCombineUpright = <
  T = TextCombineUprightProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<TextCombineUprightProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<TextCombineUprightProps<T>,Theme,Media>({
    cssProp:TEXTCOMBINEUPRIGHT,
    prop:TEXTCOMBINEUPRIGHT,
    key,
    transformValue,
  })

export const createTextCombineUprightRule = <T = TextCombineUprightProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: TEXTCOMBINEUPRIGHT, getValue: transformer})

export const textCombineUpright =createTextCombineUpright()

export const textCombineUprightRule =createTextCombineUprightRule()
