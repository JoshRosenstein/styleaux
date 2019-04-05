import { FlexShrinkProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const FLEXSHRINK='flexShrink'

export interface IFlexShrinkProps<T> {
  /**
   * The **`flex-shrink`** CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-shrink
   */
  flexShrink: T;
}

export const createFlexShrink = <
  T = FlexShrinkProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IFlexShrinkProps<T>, Theme, Breakpoints>({
    cssProp: FLEXSHRINK,
    prop: FLEXSHRINK,
    alias,
    key,
    transformValue,
  })

export const createFlexShrinkRule = <T = FlexShrinkProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: FLEXSHRINK, getValue: transformer})

export const flexShrink =createFlexShrink()

export const flexShrinkRule =createFlexShrinkRule()
