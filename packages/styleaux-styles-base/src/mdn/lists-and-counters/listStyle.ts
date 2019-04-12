import { ListStyleProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const LISTSTYLE='listStyle'

export interface ListStyleProps<T=ListStyleProperty> {
  /**
   * The **`list-style`** CSS property is a shorthand to set list style properties `list-style-type`, `list-style-image`, and `list-style-position`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style
   */
  [LISTSTYLE]: T;
}

export const createListStyle = <
  T = ListStyleProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<ListStyleProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<ListStyleProps<T>,Theme,Media>({
    cssProp:LISTSTYLE,
    prop:LISTSTYLE,
    key,
    transformValue,
  })

export const createListStyleRule = <T = ListStyleProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: LISTSTYLE, getValue: transformer})

export const listStyle =createListStyle()

export const listStyleRule =createListStyleRule()
