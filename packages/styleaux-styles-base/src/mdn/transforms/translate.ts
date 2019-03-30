import { TranslateProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const TRANSLATE='translate'

export interface ITranslateProps<T> {
  /**
   * The **`translate`** CSS property allows you to specify translation transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/translate
   */
  translate: T;
}

export const translate = <
  T = TranslateProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ITranslateProps<T>, Theme, Breakpoints>({
    cssProp: TRANSLATE,
    prop: TRANSLATE,
    alias,
    key,
    transformValue,
  })

export const translateRule = <T = TranslateProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TRANSLATE, getValue: transformer})
