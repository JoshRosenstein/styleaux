import { ColumnRuleWidthProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const COLUMNRULEWIDTH='columnRuleWidth'

export interface IColumnRuleWidthProps<T> {
  /**
   * The **`column-rule-width`** CSS property sets the width of the rule (line) drawn between columns in a multi-column layout.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-width
   */
  columnRuleWidth: T;
}

export const createColumnRuleWidth = <
  T = ColumnRuleWidthProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IColumnRuleWidthProps<T>, Theme, Breakpoints>({
    cssProp: COLUMNRULEWIDTH,
    prop: COLUMNRULEWIDTH,
    alias,
    key,
    transformValue,
  })

export const createColumnRuleWidthRule = <T = ColumnRuleWidthProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: COLUMNRULEWIDTH, getValue: transformer})

export const columnRuleWidth =createColumnRuleWidth()

export const columnRuleWidthRule =createColumnRuleWidthRule()
