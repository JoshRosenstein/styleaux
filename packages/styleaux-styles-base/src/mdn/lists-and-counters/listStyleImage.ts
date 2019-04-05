import { ListStyleImageProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const LISTSTYLEIMAGE='listStyleImage'

export interface IListStyleImageProps<T> {
  /**
   * The **`list-style-image`** CSS property sets an image to be used as the list item marker.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-image
   */
  listStyleImage: T;
}

export const createListStyleImage = <
  T = ListStyleImageProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IListStyleImageProps<T>, Theme, Breakpoints>({
    cssProp: LISTSTYLEIMAGE,
    prop: LISTSTYLEIMAGE,
    alias,
    key,
    transformValue,
  })

export const createListStyleImageRule = <T = ListStyleImageProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: LISTSTYLEIMAGE, getValue: transformer})

export const listStyleImage =createListStyleImage()

export const listStyleImageRule =createListStyleImageRule()
