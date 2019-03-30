import { ListStyleTypeProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const LISTSTYLETYPE='listStyleType'

export interface IListStyleTypeProps<T> {
  /**
   * The **`list-style-type`** CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-type
   */
  listStyleType: T;
}

export const listStyleType = <
  T = ListStyleTypeProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IListStyleTypeProps<T>, Theme, Breakpoints>({
    cssProp: LISTSTYLETYPE,
    prop: LISTSTYLETYPE,
    alias,
    key,
    transformValue,
  })

export const listStyleTypeRule = <T = ListStyleTypeProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: LISTSTYLETYPE, getValue: transformer})
