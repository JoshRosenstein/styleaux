import { Config } from '../../types';
import { FilterProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const FILTER = 'filter';

export interface FilterProps<T = FilterProperty> {
  /**
   * The **`filter`** CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.
   *
   * **Initial value**: `none`
   *
   * |  Chrome  | Firefox |   Safari    |  Edge  | IE  |
   * | :------: | :-----: | :---------: | :----: | :-: |
   * |  **53**  | **35**  | **6** _-x-_ | **12** | No  |
   * | 18 _-x-_ |         |             |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/filter
   */
  [FILTER]: T;
}

export const createFilter = <T = FilterProperty, Media = never, Theme = never>(
  config: Config<FilterProps<T>, Theme> = {},
) =>
  style<FilterProps<T>, Theme, Media>({
    cssProp: FILTER,
    prop: FILTER,
    ...config,
  });

export const createFilterRule = <T = FilterProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: FILTER, getValue: transformer });

export const filter = createFilter();

export const filterRule = createFilterRule();
