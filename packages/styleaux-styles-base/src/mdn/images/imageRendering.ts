import { ImageRenderingProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const IMAGERENDERING='imageRendering'

export interface IImageRenderingProps<T> {
  /**
   * The **`image-rendering`** CSS property sets an image scaling algorithm. The property applies to an element itself, to any images set in its other properties, and to its descendants.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/image-rendering
   */
  imageRendering: T;
}

export const imageRendering = <
  T = ImageRenderingProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IImageRenderingProps<T>, Theme, Breakpoints>({
    cssProp: IMAGERENDERING,
    prop: IMAGERENDERING,
    alias,
    key,
    transformValue,
  })

export const imageRenderingRule = <T = ImageRenderingProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: IMAGERENDERING, getValue: transformer})
