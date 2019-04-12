import { MaskImageProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const MASKIMAGE='maskImage'

export interface MaskImageProps<T=MaskImageProperty> {
  /**
   * The **`mask-image`** CSS property sets the image that is used as mask layer for an element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-image
   */
  [MASKIMAGE]: T;
}

export const createMaskImage = <
  T = MaskImageProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<MaskImageProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<MaskImageProps<T>,Theme,Media>({
    cssProp:MASKIMAGE,
    prop:MASKIMAGE,
    key,
    transformValue,
  })

export const createMaskImageRule = <T = MaskImageProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: MASKIMAGE, getValue: transformer})

export const maskImage =createMaskImage()

export const maskImageRule =createMaskImageRule()
