import { TextUnderlinePositionProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const TEXTUNDERLINEPOSITION='textUnderlinePosition'

export interface ITextUnderlinePositionProps<T> {
  /**
   * The **`text-underline-position`** CSS property specifies the position of the underline which is set using the `text-decoration` property's `underline` value.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-underline-position
   */
  textUnderlinePosition: T;
}

export const textUnderlinePosition = <
  T = TextUnderlinePositionProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ITextUnderlinePositionProps<T>, Theme, Breakpoints>({
    cssProp: TEXTUNDERLINEPOSITION,
    prop: TEXTUNDERLINEPOSITION,
    alias,
    key,
    transformValue,
  })

export const textUnderlinePositionRule = <T = TextUnderlinePositionProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TEXTUNDERLINEPOSITION, getValue: transformer})
