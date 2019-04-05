import { TextDecorationSkipProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const TEXTDECORATIONSKIP='textDecorationSkip'

export interface ITextDecorationSkipProps<T> {
  /**
   * The **`text-decoration-skip`** CSS property sets what parts of an element’s content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip
   */
  textDecorationSkip: T;
}

export const createTextDecorationSkip = <
  T = TextDecorationSkipProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ITextDecorationSkipProps<T>, Theme, Breakpoints>({
    cssProp: TEXTDECORATIONSKIP,
    prop: TEXTDECORATIONSKIP,
    alias,
    key,
    transformValue,
  })

export const createTextDecorationSkipRule = <T = TextDecorationSkipProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TEXTDECORATIONSKIP, getValue: transformer})

export const textDecorationSkip =createTextDecorationSkip()

export const textDecorationSkipRule =createTextDecorationSkipRule()
