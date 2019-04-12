import { TopProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const TOP='top'

export interface TopProps<T=TopProperty> {
  /**
   * The **`top`** CSS property participates in specifying the vertical position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/top
   */
  [TOP]: T;
}

export const createTop = <
  T = TopProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<TopProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<TopProps<T>,Theme,Media>({
    cssProp:TOP,
    prop:TOP,
    key,
    transformValue,
  })

export const createTopRule = <T = TopProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: TOP, getValue: transformer})

export const top =createTop()

export const topRule =createTopRule()
