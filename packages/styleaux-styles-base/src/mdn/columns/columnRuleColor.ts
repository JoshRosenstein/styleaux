import { ColumnRuleColorProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const COLUMNRULECOLOR='columnRuleColor'

export interface IColumnRuleColorProps<T> {
  /**
   * The **`column-rule-color`** CSS property sets the color of the rule (line) drawn between columns in a multi-column layout.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-color
   */
  columnRuleColor: T;
}

export const columnRuleColor = <
  T = ColumnRuleColorProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IColumnRuleColorProps<T>, Theme, Breakpoints>({
    cssProp: COLUMNRULECOLOR,
    prop: COLUMNRULECOLOR,
    alias,
    key,
    transformValue,
  })

export const columnRuleColorRule = <T = ColumnRuleColorProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: COLUMNRULECOLOR, getValue: transformer})
