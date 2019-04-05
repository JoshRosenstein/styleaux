import { BackdropFilterProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const BACKDROPFILTER='backdropFilter'

export interface IBackdropFilterProps<T> {
  /**
   * The **`backdrop-filter`** CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/backdrop-filter
   */
  backdropFilter: T;
}

export const createBackdropFilter = <
  T = BackdropFilterProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IBackdropFilterProps<T>, Theme, Breakpoints>({
    cssProp: BACKDROPFILTER,
    prop: BACKDROPFILTER,
    alias,
    key,
    transformValue,
  })

export const createBackdropFilterRule = <T = BackdropFilterProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: BACKDROPFILTER, getValue: transformer})

export const backdropFilter =createBackdropFilter()

export const backdropFilterRule =createBackdropFilterRule()
