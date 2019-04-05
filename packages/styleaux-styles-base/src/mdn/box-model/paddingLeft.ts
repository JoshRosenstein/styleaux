import { PaddingLeftProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const PADDINGLEFT='paddingLeft'

export interface IPaddingLeftProps<T> {
  /**
   * The **`padding-left`** CSS property sets the width of the padding area on the top of an element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
   */
  paddingLeft: T;
}

export const createPaddingLeft = <
  T = PaddingLeftProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IPaddingLeftProps<T>, Theme, Breakpoints>({
    cssProp: PADDINGLEFT,
    prop: PADDINGLEFT,
    alias,
    key,
    transformValue,
  })

export const createPaddingLeftRule = <T = PaddingLeftProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: PADDINGLEFT, getValue: transformer})

export const paddingLeft =createPaddingLeft()

export const paddingLeftRule =createPaddingLeftRule()
