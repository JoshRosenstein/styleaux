import { BackgroundSizeProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BACKGROUNDSIZE='backgroundSize'

export interface IBackgroundSizeProps<T> {
  /**
   * The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-size
   */
  backgroundSize: T;
}

export const backgroundSize = <
  T = BackgroundSizeProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBackgroundSizeProps<T>, Theme, Breakpoints>({
    cssProp: BACKGROUNDSIZE,
    prop: BACKGROUNDSIZE,
    alias,
    key,
    transformValue,
  })

export const backgroundSizeRule = <T = BackgroundSizeProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BACKGROUNDSIZE, getValue: transformer})
