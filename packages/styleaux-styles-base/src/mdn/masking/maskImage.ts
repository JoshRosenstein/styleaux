import { MaskImageProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const MASKIMAGE='maskImage'

export interface IMaskImageProps<T> {
  /**
   * The **`mask-image`** CSS property sets the image that is used as mask layer for an element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-image
   */
  maskImage: T;
}

export const createMaskImage = <
  T = MaskImageProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IMaskImageProps<T>, Theme, Breakpoints>({
    cssProp: MASKIMAGE,
    prop: MASKIMAGE,
    alias,
    key,
    transformValue,
  })

export const createMaskImageRule = <T = MaskImageProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: MASKIMAGE, getValue: transformer})

export const maskImage =createMaskImage()

export const maskImageRule =createMaskImageRule()
