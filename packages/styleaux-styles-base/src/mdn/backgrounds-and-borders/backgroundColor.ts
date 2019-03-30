import { BackgroundColorProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BACKGROUNDCOLOR='backgroundColor'

export interface IBackgroundColorProps<T> {
  /**
   * The **`background-color`** CSS property sets the background color of an element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-color
   */
  backgroundColor: T;
}

export const backgroundColor = <
  T = BackgroundColorProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBackgroundColorProps<T>, Theme, Breakpoints>({
    cssProp: BACKGROUNDCOLOR,
    prop: BACKGROUNDCOLOR,
    alias,
    key,
    transformValue,
  })

export const backgroundColorRule = <T = BackgroundColorProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BACKGROUNDCOLOR, getValue: transformer})
