import { TextDecorationSkipInkProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const TEXTDECORATIONSKIPINK='textDecorationSkipInk'

export interface TextDecorationSkipInkProps<T=TextDecorationSkipInkProperty> {
  /**
   * The **`text-decoration-skip-ink`** CSS property specifies how overlines and underlines are drawn when they pass over glyph ascenders and descenders.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink
   */
  [TEXTDECORATIONSKIPINK]: T;
}

export const createTextDecorationSkipInk = <
  T = TextDecorationSkipInkProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<TextDecorationSkipInkProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<TextDecorationSkipInkProps<T>,Theme,Media>({
    cssProp:TEXTDECORATIONSKIPINK,
    prop:TEXTDECORATIONSKIPINK,
    key,
    transformValue,
  })

export const createTextDecorationSkipInkRule = <T = TextDecorationSkipInkProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: TEXTDECORATIONSKIPINK, getValue: transformer})

export const textDecorationSkipInk =createTextDecorationSkipInk()

export const textDecorationSkipInkRule =createTextDecorationSkipInkRule()
