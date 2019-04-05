import { LetterSpacingProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const LETTERSPACING='letterSpacing'

export interface ILetterSpacingProps<T> {
  /**
   * The **`letter-spacing`** CSS property sets the spacing behavior between text characters.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/letter-spacing
   */
  letterSpacing: T;
}

export const createLetterSpacing = <
  T = LetterSpacingProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ILetterSpacingProps<T>, Theme, Breakpoints>({
    cssProp: LETTERSPACING,
    prop: LETTERSPACING,
    alias,
    key,
    transformValue,
  })

export const createLetterSpacingRule = <T = LetterSpacingProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: LETTERSPACING, getValue: transformer})

export const letterSpacing =createLetterSpacing()

export const letterSpacingRule =createLetterSpacingRule()
