import { OutlineStyleProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const OUTLINESTYLE='outlineStyle'

export interface IOutlineStyleProps<T> {
  /**
   * The **`outline-style`** CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-style
   */
  outlineStyle: T;
}

export const createOutlineStyle = <
  T = OutlineStyleProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IOutlineStyleProps<T>, Theme, Breakpoints>({
    cssProp: OUTLINESTYLE,
    prop: OUTLINESTYLE,
    alias,
    key,
    transformValue,
  })

export const createOutlineStyleRule = <T = OutlineStyleProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: OUTLINESTYLE, getValue: transformer})

export const outlineStyle =createOutlineStyle()

export const outlineStyleRule =createOutlineStyleRule()
