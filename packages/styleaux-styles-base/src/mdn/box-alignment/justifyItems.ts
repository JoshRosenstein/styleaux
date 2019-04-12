import { JustifyItemsProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const JUSTIFYITEMS='justifyItems'

export interface JustifyItemsProps<T=JustifyItemsProperty> {
  /**
   * The CSS **`justify-items`** property defines the default `justify-self` for all items of the box, giving them all a default way of justifying each box along the appropriate axis.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-items
   */
  [JUSTIFYITEMS]: T;
}

export const createJustifyItems = <
  T = JustifyItemsProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<JustifyItemsProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<JustifyItemsProps<T>,Theme,Media>({
    cssProp:JUSTIFYITEMS,
    prop:JUSTIFYITEMS,
    key,
    transformValue,
  })

export const createJustifyItemsRule = <T = JustifyItemsProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: JUSTIFYITEMS, getValue: transformer})

export const justifyItems =createJustifyItems()

export const justifyItemsRule =createJustifyItemsRule()
