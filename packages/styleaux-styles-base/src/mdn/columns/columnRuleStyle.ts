import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { ColumnRuleStyleProperty } from '@styleaux/csstype';

const COLUMNRULESTYLE = 'columnRuleStyle';

export interface ColumnRuleStyleProps<T = ColumnRuleStyleProperty> {
  /**
   * The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |   Safari    |  Edge  |   IE   |
   * | :----: | :-----: | :---------: | :----: | :----: |
   * | **50** | **52**  | **3** _-x-_ | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-style
   */
  [COLUMNRULESTYLE]: T;
}

export const createColumnRuleStyle = <
  T = ColumnRuleStyleProperty,
  Media = never,
  Theme = never
>(
  config: Config<ColumnRuleStyleProps<T>, Theme> = {},
) =>
  style<ColumnRuleStyleProps<T>, Theme, Media>({
    cssProp: COLUMNRULESTYLE,
    prop: COLUMNRULESTYLE,
    ...config,
  });

export const createColumnRuleStyleRule = <
  T = ColumnRuleStyleProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: COLUMNRULESTYLE, getValue: transformer });

export const columnRuleStyle = createColumnRuleStyle();

export const columnRuleStyleRule = createColumnRuleStyleRule();
