import { ListStyleImageProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const LISTSTYLEIMAGE='listStyleImage'

export interface ListStyleImageProps<T=ListStyleImageProperty> {
  /**
   * The **`list-style-image`** CSS property sets an image to be used as the list item marker.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-image
   */
  [LISTSTYLEIMAGE]: T;
}

export const createListStyleImage = <
  T = ListStyleImageProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<ListStyleImageProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<ListStyleImageProps<T>,Theme,Media>({
    cssProp:LISTSTYLEIMAGE,
    prop:LISTSTYLEIMAGE,
    key,
    transformValue,
  })

export const createListStyleImageRule = <T = ListStyleImageProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: LISTSTYLEIMAGE, getValue: transformer})

export const listStyleImage =createListStyleImage()

export const listStyleImageRule =createListStyleImageRule()
