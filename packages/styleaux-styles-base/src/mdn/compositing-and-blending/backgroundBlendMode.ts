import { BackgroundBlendModeProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BACKGROUNDBLENDMODE='backgroundBlendMode'

export interface IBackgroundBlendModeProps<T> {
  /**
   * The **`background-blend-mode`** CSS property sets how an element's background images should blend with each other and with the element's background color.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-blend-mode
   */
  backgroundBlendMode: T;
}

export const backgroundBlendMode = <
  T = BackgroundBlendModeProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBackgroundBlendModeProps<T>, Theme, Breakpoints>({
    cssProp: BACKGROUNDBLENDMODE,
    prop: BACKGROUNDBLENDMODE,
    alias,
    key,
    transformValue,
  })

export const backgroundBlendModeRule = <T = BackgroundBlendModeProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BACKGROUNDBLENDMODE, getValue: transformer})
