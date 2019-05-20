import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { ColumnRuleWidthProperty } from '@styleaux/csstype';

const COLUMNRULEWIDTH = 'columnRuleWidth';

export interface ColumnRuleWidthProps<T = ColumnRuleWidthProperty> {
  /**
   * The **`column-rule-width`** CSS property sets the width of the rule (line) drawn between columns in a multi-column layout.
   *
   * **Initial value**: `medium`
   *
   * | Chrome |  Firefox  |   Safari    |  Edge  |   IE   |
   * | :----: | :-------: | :---------: | :----: | :----: |
   * | **50** |  **50**   | **3** _-x-_ | **12** | **10** |
   * |        | 3.5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-width
   */
  [COLUMNRULEWIDTH]: T;
}

export const createColumnRuleWidth = <
  T = ColumnRuleWidthProperty,
  Media = never,
  Theme = never
>(
  config: Config<ColumnRuleWidthProps<T>, Theme> = {},
) =>
  style<ColumnRuleWidthProps<T>, Theme, Media>({
    cssProp: COLUMNRULEWIDTH,
    prop: COLUMNRULEWIDTH,
    ...config,
  });

export const createColumnRuleWidthRule = <
  T = ColumnRuleWidthProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: COLUMNRULEWIDTH, getValue: transformer });

export const columnRuleWidth = createColumnRuleWidth();

export const columnRuleWidthRule = createColumnRuleWidthRule();
