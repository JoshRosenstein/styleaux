import { TopProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const TOP='top'

export interface ITopProps<T> {
  /**
   * The **`top`** CSS property participates in specifying the vertical position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/top
   */
  top: T;
}

export const createTop = <
  T = TopProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ITopProps<T>, Theme, Breakpoints>({
    cssProp: TOP,
    prop: TOP,
    alias,
    key,
    transformValue,
  })

export const createTopRule = <T = TopProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TOP, getValue: transformer})

export const top =createTop()

export const topRule =createTopRule()
