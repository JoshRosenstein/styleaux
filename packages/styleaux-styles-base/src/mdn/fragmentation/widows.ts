import { WidowsProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const WIDOWS = 'widows';

export interface WidowsProps<T = WidowsProperty> {
  /**
   * The **`widows`** CSS property sets the minimum number of lines in a block container that must be shown at the _top_ of a page, region, or column.
   *
   * **Initial value**: `2`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **25** |   No    | **1.3** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/widows
   */
  [WIDOWS]: T;
}

export const createWidows = <T = WidowsProperty, Media = never, Theme = never>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<WidowsProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<WidowsProps<T>, Theme, Media>({
    cssProp: WIDOWS,
    prop: WIDOWS,
    key,
    transform,
  });

export const createWidowsRule = <T = WidowsProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: WIDOWS, getValue: transformer });

export const widows = createWidows();

export const widowsRule = createWidowsRule();
