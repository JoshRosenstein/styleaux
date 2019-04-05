import { ContainProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const CONTAIN='contain'

export interface IContainProps<T> {
  /**
   * The **`contain`** CSS property allows an author to indicate that an element and its contents are, as much as possible, _independent_ of the rest of the document tree. This allows the browser to recalculate layout, style, paint, size, or any combination of them for a limited area of the DOM and not the entire page.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/contain
   */
  contain: T;
}

export const createContain = <
  T = ContainProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IContainProps<T>, Theme, Breakpoints>({
    cssProp: CONTAIN,
    prop: CONTAIN,
    alias,
    key,
    transformValue,
  })

export const createContainRule = <T = ContainProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: CONTAIN, getValue: transformer})

export const contain =createContain()

export const containRule =createContainRule()
