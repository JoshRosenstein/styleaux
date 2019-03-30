import { AppearanceProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const APPEARANCE='appearance'

export interface IAppearanceProps<T> {
  /**
   * The **`-moz-appearance`** CSS property is used in Gecko (Firefox) to display an element using platform-native styling based on the operating system's theme.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/appearance
   */
  appearance: T;
}

export const appearance = <
  T = AppearanceProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IAppearanceProps<T>, Theme, Breakpoints>({
    cssProp: APPEARANCE,
    prop: APPEARANCE,
    alias,
    key,
    transformValue,
  })

export const appearanceRule = <T = AppearanceProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: APPEARANCE, getValue: transformer})