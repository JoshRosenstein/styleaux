import { LineBreakProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const LINEBREAK='lineBreak'

export interface LineBreakProps<T=LineBreakProperty> {
  /**
   * The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-break
   */
  [LINEBREAK]: T;
}

export const createLineBreak = <
  T = LineBreakProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<LineBreakProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<LineBreakProps<T>,Theme,Media>({
    cssProp:LINEBREAK,
    prop:LINEBREAK,
    key,
    transformValue,
  })

export const createLineBreakRule = <T = LineBreakProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: LINEBREAK, getValue: transformer})

export const lineBreak =createLineBreak()

export const lineBreakRule =createLineBreakRule()
