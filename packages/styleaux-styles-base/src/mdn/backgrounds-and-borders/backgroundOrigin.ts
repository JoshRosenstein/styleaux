import { BackgroundOriginProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BACKGROUNDORIGIN='backgroundOrigin'

export interface IBackgroundOriginProps<T> {
  /**
   * The **`background-origin`** CSS property sets the _background positioning area_. In other words, it sets the origin position of an image set with the `background-image` property.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-origin
   */
  backgroundOrigin: T;
}

export const backgroundOrigin = <
  T = BackgroundOriginProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBackgroundOriginProps<T>, Theme, Breakpoints>({
    cssProp: BACKGROUNDORIGIN,
    prop: BACKGROUNDORIGIN,
    alias,
    key,
    transformValue,
  })

export const backgroundOriginRule = <T = BackgroundOriginProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BACKGROUNDORIGIN, getValue: transformer})
