import { ListStylePositionProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const LISTSTYLEPOSITION='listStylePosition'

export interface ListStylePositionProps<T=ListStylePositionProperty> {
  /**
   * The **`list-style-position`** CSS property sets the position of the `::marker` relative to a list item.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-position
   */
  [LISTSTYLEPOSITION]: T;
}

export const createListStylePosition = <
  T = ListStylePositionProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<ListStylePositionProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<ListStylePositionProps<T>,Theme,Media>({
    cssProp:LISTSTYLEPOSITION,
    prop:LISTSTYLEPOSITION,
    key,
    transformValue,
  })

export const createListStylePositionRule = <T = ListStylePositionProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: LISTSTYLEPOSITION, getValue: transformer})

export const listStylePosition =createListStylePosition()

export const listStylePositionRule =createListStylePositionRule()
