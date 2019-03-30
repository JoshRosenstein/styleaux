import { ObjectFitProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const OBJECTFIT='objectFit'

export interface IObjectFitProps<T> {
  /**
   * The **`object-fit`** CSS property sets how the content of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/object-fit
   */
  objectFit: T;
}

export const objectFit = <
  T = ObjectFitProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IObjectFitProps<T>, Theme, Breakpoints>({
    cssProp: OBJECTFIT,
    prop: OBJECTFIT,
    alias,
    key,
    transformValue,
  })

export const objectFitRule = <T = ObjectFitProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: OBJECTFIT, getValue: transformer})
