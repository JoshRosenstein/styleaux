import { LetterSpacingProperty } from '@roseys/csstype';

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

export const letterSpacing = <
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

export const letterSpacingRule = <T = LetterSpacingProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: LETTERSPACING, getValue: transformer})
