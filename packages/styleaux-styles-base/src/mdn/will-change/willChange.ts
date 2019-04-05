import { WillChangeProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const WILLCHANGE='willChange'

export interface IWillChangeProps<T> {
  /**
   * The **`will-change`** CSS property hints to browsers how an element is expected to change. Browsers may set up optimizations before an element is actually changed. These kinds of optimizations can increase the responsiveness of a page by doing potentially expensive work before they are actually required.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/will-change
   */
  willChange: T;
}

export const createWillChange = <
  T = WillChangeProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IWillChangeProps<T>, Theme, Breakpoints>({
    cssProp: WILLCHANGE,
    prop: WILLCHANGE,
    alias,
    key,
    transformValue,
  })

export const createWillChangeRule = <T = WillChangeProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: WILLCHANGE, getValue: transformer})

export const willChange =createWillChange()

export const willChangeRule =createWillChangeRule()
