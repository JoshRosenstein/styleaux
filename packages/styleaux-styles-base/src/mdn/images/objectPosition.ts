import { ObjectPositionProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const OBJECTPOSITION='objectPosition'

export interface IObjectPositionProps<T> {
  /**
   * The **`object-position`** CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/object-position
   */
  objectPosition: T;
}

export const objectPosition = <
  T = ObjectPositionProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IObjectPositionProps<T>, Theme, Breakpoints>({
    cssProp: OBJECTPOSITION,
    prop: OBJECTPOSITION,
    alias,
    key,
    transformValue,
  })

export const objectPositionRule = <T = ObjectPositionProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: OBJECTPOSITION, getValue: transformer})
