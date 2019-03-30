import { OutlineStyleProperty } from '@roseys/csstype';

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

export const outlineStyle = <
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

export const outlineStyleRule = <T = OutlineStyleProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: OUTLINESTYLE, getValue: transformer})
