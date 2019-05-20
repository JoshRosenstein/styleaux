import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { ColumnRuleColorProperty } from '@styleaux/csstype';

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
>(
  config: Config<ColumnRuleColorProps<T>, Theme> = {},
) =>
  style<ColumnRuleColorProps<T>, Theme, Media>({
    cssProp: COLUMNRULECOLOR,
    prop: COLUMNRULECOLOR,
    ...config,
  });

export const createColumnRuleColorRule = <
  T = ColumnRuleColorProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: COLUMNRULECOLOR, getValue: transformer });

export const columnRuleColor = createColumnRuleColor();

export const columnRuleColorRule = createColumnRuleColorRule();
