import { ScrollBehaviorProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const SCROLLBEHAVIOR='scrollBehavior'

export interface IScrollBehaviorProps<T> {
  /**
   * The **`scroll-behavior`** CSS property sets the behavior for a scrolling box when scrolling is triggered by the navigation or CSSOM scrolling APIs.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-behavior
   */
  scrollBehavior: T;
}

export const scrollBehavior = <
  T = ScrollBehaviorProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IScrollBehaviorProps<T>, Theme, Breakpoints>({
    cssProp: SCROLLBEHAVIOR,
    prop: SCROLLBEHAVIOR,
    alias,
    key,
    transformValue,
  })

export const scrollBehaviorRule = <T = ScrollBehaviorProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: SCROLLBEHAVIOR, getValue: transformer})
