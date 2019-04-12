import { TranslateProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const TRANSLATE='translate'

export interface TranslateProps<T=TranslateProperty> {
  /**
   * The **`translate`** CSS property allows you to specify translation transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/translate
   */
  [TRANSLATE]: T;
}

export const createTranslate = <
  T = TranslateProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<TranslateProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<TranslateProps<T>,Theme,Media>({
    cssProp:TRANSLATE,
    prop:TRANSLATE,
    key,
    transformValue,
  })

export const createTranslateRule = <T = TranslateProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: TRANSLATE, getValue: transformer})

export const translate =createTranslate()

export const translateRule =createTranslateRule()
