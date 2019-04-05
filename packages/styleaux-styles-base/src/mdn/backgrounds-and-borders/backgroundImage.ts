import { BackgroundImageProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BACKGROUNDIMAGE='backgroundImage'

export interface IBackgroundImageProps<T> {
  /**
   * The **`background-image`** CSS property sets one or more background images on an element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-image
   */
  backgroundImage: T;
}

export const createBackgroundImage = <
  T = BackgroundImageProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBackgroundImageProps<T>, Theme, Breakpoints>({
    cssProp: BACKGROUNDIMAGE,
    prop: BACKGROUNDIMAGE,
    alias,
    key,
    transformValue,
  })

export const createBackgroundImageRule = <T = BackgroundImageProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BACKGROUNDIMAGE, getValue: transformer})

export const backgroundImage =createBackgroundImage()

export const backgroundImageRule =createBackgroundImageRule()
