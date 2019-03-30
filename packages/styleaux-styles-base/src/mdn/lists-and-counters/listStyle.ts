import { ListStyleProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const LISTSTYLE='listStyle'

export interface IListStyleProps<T> {
  /**
   * The **`list-style`** CSS property is a shorthand to set list style properties `list-style-type`, `list-style-image`, and `list-style-position`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style
   */
  listStyle: T;
}

export const listStyle = <
  T = ListStyleProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IListStyleProps<T>, Theme, Breakpoints>({
    cssProp: LISTSTYLE,
    prop: LISTSTYLE,
    alias,
    key,
    transformValue,
  })

export const listStyleRule = <T = ListStyleProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: LISTSTYLE, getValue: transformer})
