import { ColumnRuleProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const COLUMNRULE='columnRule'

export interface IColumnRuleProps<T> {
  /**
   * The **`column-rule`** CSS property sets the width, style, and color of the rule (line) drawn between columns in a multi-column layout.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule
   */
  columnRule: T;
}

export const createColumnRule = <
  T = ColumnRuleProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IColumnRuleProps<T>, Theme, Breakpoints>({
    cssProp: COLUMNRULE,
    prop: COLUMNRULE,
    alias,
    key,
    transformValue,
  })

export const createColumnRuleRule = <T = ColumnRuleProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: COLUMNRULE, getValue: transformer})

export const columnRule =createColumnRule()

export const columnRuleRule =createColumnRuleRule()
