import { ColumnRuleColorProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const COLUMNRULECOLOR='columnRuleColor'

export interface ColumnRuleColorProps<T=ColumnRuleColorProperty> {
  /**
   * The **`column-rule-color`** CSS property sets the color of the rule (line) drawn between columns in a multi-column layout.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-color
   */
  [COLUMNRULECOLOR]: T;
}

export const createColumnRuleColor = <
  T = ColumnRuleColorProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<ColumnRuleColorProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<ColumnRuleColorProps<T>,Theme,Media>({
    cssProp:COLUMNRULECOLOR,
    prop:COLUMNRULECOLOR,
    key,
    transformValue,
  })

export const createColumnRuleColorRule = <T = ColumnRuleColorProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: COLUMNRULECOLOR, getValue: transformer})

export const columnRuleColor =createColumnRuleColor()

export const columnRuleColorRule =createColumnRuleColorRule()
