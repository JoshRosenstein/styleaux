import { FilterProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const FILTER='filter'

export interface FilterProps<T=FilterProperty> {
  /**
   * The **`filter`** CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/filter
   */
  [FILTER]: T;
}

export const createFilter = <
  T = FilterProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<FilterProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<FilterProps<T>,Theme,Media>({
    cssProp:FILTER,
    prop:FILTER,
    key,
    transformValue,
  })

export const createFilterRule = <T = FilterProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: FILTER, getValue: transformer})

export const filter =createFilter()

export const filterRule =createFilterRule()
