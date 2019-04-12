import { ColumnRuleProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const COLUMNRULE='columnRule'

export interface ColumnRuleProps<T=ColumnRuleProperty> {
  /**
   * The **`column-rule`** CSS property sets the width, style, and color of the rule (line) drawn between columns in a multi-column layout.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule
   */
  [COLUMNRULE]: T;
}

export const createColumnRule = <
  T = ColumnRuleProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<ColumnRuleProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<ColumnRuleProps<T>,Theme,Media>({
    cssProp:COLUMNRULE,
    prop:COLUMNRULE,
    key,
    transformValue,
  })

export const createColumnRuleRule = <T = ColumnRuleProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: COLUMNRULE, getValue: transformer})

export const columnRule =createColumnRule()

export const columnRuleRule =createColumnRuleRule()
