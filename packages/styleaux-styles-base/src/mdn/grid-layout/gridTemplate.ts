import { GridTemplateProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const GRIDTEMPLATE='gridTemplate'

export interface IGridTemplateProps<T> {
  /**
   * The **`grid-template`** CSS property is a shorthand property for defining grid columns, rows, and areas.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template
   */
  gridTemplate: T;
}

export const gridTemplate = <
  T = GridTemplateProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IGridTemplateProps<T>, Theme, Breakpoints>({
    cssProp: GRIDTEMPLATE,
    prop: GRIDTEMPLATE,
    alias,
    key,
    transformValue,
  })

export const gridTemplateRule = <T = GridTemplateProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: GRIDTEMPLATE, getValue: transformer})
