import { TextOrientationProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const TEXTORIENTATION='textOrientation'

export interface ITextOrientationProps<T> {
  /**
   * The **`text-orientation`** CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode (when `writing-mode` is not `horizontal-tb`). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-orientation
   */
  textOrientation: T;
}

export const textOrientation = <
  T = TextOrientationProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ITextOrientationProps<T>, Theme, Breakpoints>({
    cssProp: TEXTORIENTATION,
    prop: TEXTORIENTATION,
    alias,
    key,
    transformValue,
  })

export const textOrientationRule = <T = TextOrientationProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TEXTORIENTATION, getValue: transformer})
