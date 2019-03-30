import { PlaceContentProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const PLACECONTENT='placeContent'

export interface IPlaceContentProps<T> {
  /**
   * The `**place-content**` CSS property is a shorthand for `align-content` and `justify-content`. It can be used in any layout method which utilizes both of these alignment values.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/place-content
   */
  placeContent: T;
}

export const placeContent = <
  T = PlaceContentProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IPlaceContentProps<T>, Theme, Breakpoints>({
    cssProp: PLACECONTENT,
    prop: PLACECONTENT,
    alias,
    key,
    transformValue,
  })

export const placeContentRule = <T = PlaceContentProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: PLACECONTENT, getValue: transformer})
