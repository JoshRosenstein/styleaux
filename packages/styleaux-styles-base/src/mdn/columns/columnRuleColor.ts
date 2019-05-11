import { ColumnRuleColorProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const COLUMNRULECOLOR = 'columnRuleColor';

export interface ColumnRuleColorProps<T = ColumnRuleColorProperty> {
  /**
   * The **`column-rule-color`** CSS property sets the color of the rule (line) drawn between columns in a multi-column layout.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome |  Firefox  |   Safari    |  Edge  |   IE   |
   * | :----: | :-------: | :---------: | :----: | :----: |
   * | **50** |  **52**   | **3** _-x-_ | **12** | **10** |
   * |        | 3.5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-color
   */
  [COLUMNRULECOLOR]: T;
}

export const createColumnRuleColor = <
  T = ColumnRuleColorProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<ColumnRuleColorProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<ColumnRuleColorProps<T>, Theme, Media>({
    cssProp: COLUMNRULECOLOR,
    prop: COLUMNRULECOLOR,
    key,
    transformValue,
  });

export const createColumnRuleColorRule = <
  T = ColumnRuleColorProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: COLUMNRULECOLOR, getValue: transformer });

export const columnRuleColor = createColumnRuleColor();

export const columnRuleColorRule = createColumnRuleColorRule();
