import { WidowsProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const WIDOWS='widows'

export interface WidowsProps<T=WidowsProperty> {
  /**
   * The **`widows`** CSS property sets the minimum number of lines in a block container that must be shown at the _top_ of a page, region, or column.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/widows
   */
  [WIDOWS]: T;
}

export const createWidows = <
  T = WidowsProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<WidowsProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<WidowsProps<T>,Theme,Media>({
    cssProp:WIDOWS,
    prop:WIDOWS,
    key,
    transformValue,
  })

export const createWidowsRule = <T = WidowsProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: WIDOWS, getValue: transformer})

export const widows =createWidows()

export const widowsRule =createWidowsRule()
