import { Config } from '../../types';
import { ColumnRuleProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const COLUMNRULE = 'columnRule';

export interface ColumnRuleProps<T = ColumnRuleProperty> {
  /**
   * The **`column-rule`** CSS property sets the width, style, and color of the rule (line) drawn between columns in a multi-column layout.
   *
   * | Chrome |  Firefox  |   Safari    |  Edge  |   IE   |
   * | :----: | :-------: | :---------: | :----: | :----: |
   * | **50** |  **52**   | **3** _-x-_ | **12** | **10** |
   * |        | 3.5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule
   */
  [COLUMNRULE]: T;
}

export const createColumnRule = <
  T = ColumnRuleProperty,
  Media = never,
  Theme = never
>(
  config: Config<ColumnRuleProps<T>, Theme> = {},
) =>
  style<ColumnRuleProps<T>, Theme, Media>({
    cssProp: COLUMNRULE,
    prop: COLUMNRULE,
    ...config,
  });

export const createColumnRuleRule = <T = ColumnRuleProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: COLUMNRULE, getValue: transformer });

export const columnRule = createColumnRule();

export const columnRuleRule = createColumnRuleRule();
