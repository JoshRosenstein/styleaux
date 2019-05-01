import { FlexProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const FLEX='flex'

export interface FlexProps<T=FlexProperty> {
  /**
   * The **`flex`** CSS property sets how a flex item will grow or shrink to fit the space available in its flex container. It is a shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex
   */
  [FLEX]: T;
}

export const createFlex = <
  T = FlexProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<FlexProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<FlexProps<T>,Theme,Media>({
    cssProp:FLEX,
    prop:FLEX,
    key,
    transformValue,
  })

export const createFlexRule = <T = FlexProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: FLEX, getValue: transformer})

export const flex =createFlex()

export const flexRule =createFlexRule()
