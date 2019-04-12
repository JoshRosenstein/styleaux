import { ImageRenderingProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const IMAGERENDERING='imageRendering'

export interface ImageRenderingProps<T=ImageRenderingProperty> {
  /**
   * The **`image-rendering`** CSS property sets an image scaling algorithm. The property applies to an element itself, to any images set in its other properties, and to its descendants.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/image-rendering
   */
  [IMAGERENDERING]: T;
}

export const createImageRendering = <
  T = ImageRenderingProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<ImageRenderingProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<ImageRenderingProps<T>,Theme,Media>({
    cssProp:IMAGERENDERING,
    prop:IMAGERENDERING,
    key,
    transformValue,
  })

export const createImageRenderingRule = <T = ImageRenderingProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: IMAGERENDERING, getValue: transformer})

export const imageRendering =createImageRendering()

export const imageRenderingRule =createImageRenderingRule()
