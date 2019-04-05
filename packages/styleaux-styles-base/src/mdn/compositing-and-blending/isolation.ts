import { IsolationProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const ISOLATION='isolation'

export interface IIsolationProps<T> {
  /**
   * The **`isolation`** CSS property determines whether an element must create a new stacking context.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/isolation
   */
  isolation: T;
}

export const createIsolation = <
  T = IsolationProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IIsolationProps<T>, Theme, Breakpoints>({
    cssProp: ISOLATION,
    prop: ISOLATION,
    alias,
    key,
    transformValue,
  })

export const createIsolationRule = <T = IsolationProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: ISOLATION, getValue: transformer})

export const isolation =createIsolation()

export const isolationRule =createIsolationRule()
