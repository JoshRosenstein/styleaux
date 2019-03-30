import { ColumnRuleStyleProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const COLUMNRULESTYLE='columnRuleStyle'

export interface IColumnRuleStyleProps<T> {
  /**
   * The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-style
   */
  columnRuleStyle: T;
}

export const columnRuleStyle = <
  T = ColumnRuleStyleProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IColumnRuleStyleProps<T>, Theme, Breakpoints>({
    cssProp: COLUMNRULESTYLE,
    prop: COLUMNRULESTYLE,
    alias,
    key,
    transformValue,
  })

export const columnRuleStyleRule = <T = ColumnRuleStyleProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: COLUMNRULESTYLE, getValue: transformer})
