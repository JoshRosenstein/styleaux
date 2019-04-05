import { OffsetPathProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const OFFSETPATH='offsetPath'

export interface IOffsetPathProps<T> {
  /**
   * The **`offset-path`** CSS property specifies a motion path for an element to follow and defines the element's positioning within the parent container or SVG coordinate system.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
   */
  offsetPath: T;
}

export const createOffsetPath = <
  T = OffsetPathProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IOffsetPathProps<T>, Theme, Breakpoints>({
    cssProp: OFFSETPATH,
    prop: OFFSETPATH,
    alias,
    key,
    transformValue,
  })

export const createOffsetPathRule = <T = OffsetPathProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: OFFSETPATH, getValue: transformer})

export const offsetPath =createOffsetPath()

export const offsetPathRule =createOffsetPathRule()
