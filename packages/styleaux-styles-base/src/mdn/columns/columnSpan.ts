import { Config } from '../../types';
import { ColumnSpanProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const COLUMNSPAN = 'columnSpan';

export interface ColumnSpanProps<T = ColumnSpanProperty> {
  /**
   * The **`column-span`** CSS property makes it possible for an element to span across all columns when its value is set to `all`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** |   n/a   |  Yes   | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-span
   */
  [COLUMNSPAN]: T;
}

export const createColumnSpan = <
  T = ColumnSpanProperty,
  Media = never,
  Theme = never
>(
  config: Config<ColumnSpanProps<T>, Theme> = {},
) =>
  style<ColumnSpanProps<T>, Theme, Media>({
    cssProp: COLUMNSPAN,
    prop: COLUMNSPAN,
    ...config,
  });

export const createColumnSpanRule = <T = ColumnSpanProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: COLUMNSPAN, getValue: transformer });

export const columnSpan = createColumnSpan();

export const columnSpanRule = createColumnSpanRule();
