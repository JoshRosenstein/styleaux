import { ColumnRuleColorProperty } from '@styleaux/csstype';

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

export const createColumnRuleColor = <
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

export const createColumnRuleColorRule = <T = ColumnRuleColorProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: COLUMNRULECOLOR, getValue: transformer})

export const columnRuleColor =createColumnRuleColor()

export const columnRuleColorRule =createColumnRuleColorRule()
