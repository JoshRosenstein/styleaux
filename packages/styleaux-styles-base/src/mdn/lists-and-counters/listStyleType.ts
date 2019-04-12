import { ListStyleTypeProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const LISTSTYLETYPE='listStyleType'

export interface ListStyleTypeProps<T=ListStyleTypeProperty> {
  /**
   * The **`list-style-type`** CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-type
   */
  [LISTSTYLETYPE]: T;
}

export const createListStyleType = <
  T = ListStyleTypeProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<ListStyleTypeProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<ListStyleTypeProps<T>,Theme,Media>({
    cssProp:LISTSTYLETYPE,
    prop:LISTSTYLETYPE,
    key,
    transformValue,
  })

export const createListStyleTypeRule = <T = ListStyleTypeProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: LISTSTYLETYPE, getValue: transformer})

export const listStyleType =createListStyleType()

export const listStyleTypeRule =createListStyleTypeRule()
