import { ColumnRuleWidthProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const COLUMNRULEWIDTH='columnRuleWidth'

export interface ColumnRuleWidthProps<T=ColumnRuleWidthProperty> {
  /**
   * The **`column-rule-width`** CSS property sets the width of the rule (line) drawn between columns in a multi-column layout.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-width
   */
  [COLUMNRULEWIDTH]: T;
}

export const createColumnRuleWidth = <
  T = ColumnRuleWidthProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<ColumnRuleWidthProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<ColumnRuleWidthProps<T>,Theme,Media>({
    cssProp:COLUMNRULEWIDTH,
    prop:COLUMNRULEWIDTH,
    key,
    transformValue,
  })

export const createColumnRuleWidthRule = <T = ColumnRuleWidthProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: COLUMNRULEWIDTH, getValue: transformer})

export const columnRuleWidth =createColumnRuleWidth()

export const columnRuleWidthRule =createColumnRuleWidthRule()
