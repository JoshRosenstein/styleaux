import { VisibilityProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const VISIBILITY='visibility'

export interface IVisibilityProps<T> {
  /**
   * The **`visibility`** CSS property shows or hides an element without changing the layout of a document. The property can also hide rows or columns in a `<table>`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/visibility
   */
  visibility: T;
}

export const createVisibility = <
  T = VisibilityProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IVisibilityProps<T>, Theme, Breakpoints>({
    cssProp: VISIBILITY,
    prop: VISIBILITY,
    alias,
    key,
    transformValue,
  })

export const createVisibilityRule = <T = VisibilityProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: VISIBILITY, getValue: transformer})

export const visibility =createVisibility()

export const visibilityRule =createVisibilityRule()
