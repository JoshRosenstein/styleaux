import { ScrollSnapTypeProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const SCROLLSNAPTYPE='scrollSnapType'

export interface IScrollSnapTypeProps<T> {
  /**
   * The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type
   */
  scrollSnapType: T;
}

export const createScrollSnapType = <
  T = ScrollSnapTypeProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IScrollSnapTypeProps<T>, Theme, Breakpoints>({
    cssProp: SCROLLSNAPTYPE,
    prop: SCROLLSNAPTYPE,
    alias,
    key,
    transformValue,
  })

export const createScrollSnapTypeRule = <T = ScrollSnapTypeProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: SCROLLSNAPTYPE, getValue: transformer})

export const scrollSnapType =createScrollSnapType()

export const scrollSnapTypeRule =createScrollSnapTypeRule()
