import { OffsetDistanceProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const OFFSETDISTANCE='offsetDistance'

export interface IOffsetDistanceProps<T> {
  /**
   * The **`offset-distance`** CSS property specifies a position along an `offset-path`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-distance
   */
  offsetDistance: T;
}

export const offsetDistance = <
  T = OffsetDistanceProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IOffsetDistanceProps<T>, Theme, Breakpoints>({
    cssProp: OFFSETDISTANCE,
    prop: OFFSETDISTANCE,
    alias,
    key,
    transformValue,
  })

export const offsetDistanceRule = <T = OffsetDistanceProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: OFFSETDISTANCE, getValue: transformer})
