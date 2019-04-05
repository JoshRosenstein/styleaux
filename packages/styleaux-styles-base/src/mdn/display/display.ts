import { DisplayProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const DISPLAY='display'

export interface IDisplayProps<T> {
  /**
   * The **`display`** CSS property defines the _display type_ of an element, which consists of the two basic qualities of how an element generates boxes — the **outer display type** defining how the box participates in flow layout, and the **inner display type** defining how the children of the box are laid out.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/display
   */
  display: T;
}

export const createDisplay = <
  T = DisplayProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IDisplayProps<T>, Theme, Breakpoints>({
    cssProp: DISPLAY,
    prop: DISPLAY,
    alias,
    key,
    transformValue,
  })

export const createDisplayRule = <T = DisplayProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: DISPLAY, getValue: transformer})

export const display =createDisplay()

export const displayRule =createDisplayRule()
