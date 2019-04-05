import { BackgroundProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BACKGROUND='background'

export interface IBackgroundProps<T> {
  /**
   * The **`background`** shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background
   */
  background: T;
}

export const createBackground = <
  T = BackgroundProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBackgroundProps<T>, Theme, Breakpoints>({
    cssProp: BACKGROUND,
    prop: BACKGROUND,
    alias,
    key,
    transformValue,
  })

export const createBackgroundRule = <T = BackgroundProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BACKGROUND, getValue: transformer})

export const background =createBackground()

export const backgroundRule =createBackgroundRule()
