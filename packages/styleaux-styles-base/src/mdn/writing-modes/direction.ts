import { DirectionProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const DIRECTION='direction'

export interface IDirectionProps<T> {
  /**
   * The **`direction`** CSS property sets the direction of text, table columns, and horizontal overflow. Use `rtl` for languages written from right to left (like Hebrew or Arabic), and `ltr` for those written from left to right (like English and most other languages).
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/direction
   */
  direction: T;
}

export const direction = <
  T = DirectionProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IDirectionProps<T>, Theme, Breakpoints>({
    cssProp: DIRECTION,
    prop: DIRECTION,
    alias,
    key,
    transformValue,
  })

export const directionRule = <T = DirectionProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: DIRECTION, getValue: transformer})
