import { TextOverflowProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const TEXTOVERFLOW='textOverflow'

export interface TextOverflowProps<T=TextOverflowProperty> {
  /**
   * The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-overflow
   */
  [TEXTOVERFLOW]: T;
}

export const createTextOverflow = <
  T = TextOverflowProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<TextOverflowProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<TextOverflowProps<T>,Theme,Media>({
    cssProp:TEXTOVERFLOW,
    prop:TEXTOVERFLOW,
    key,
    transformValue,
  })

export const createTextOverflowRule = <T = TextOverflowProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: TEXTOVERFLOW, getValue: transformer})

export const textOverflow =createTextOverflow()

export const textOverflowRule =createTextOverflowRule()
