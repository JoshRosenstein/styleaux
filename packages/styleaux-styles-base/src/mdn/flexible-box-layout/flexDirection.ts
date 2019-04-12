import { FlexDirectionProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const FLEXDIRECTION='flexDirection'

export interface FlexDirectionProps<T=FlexDirectionProperty> {
  /**
   * The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-direction
   */
  [FLEXDIRECTION]: T;
}

export const createFlexDirection = <
  T = FlexDirectionProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<FlexDirectionProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<FlexDirectionProps<T>,Theme,Media>({
    cssProp:FLEXDIRECTION,
    prop:FLEXDIRECTION,
    key,
    transformValue,
  })

export const createFlexDirectionRule = <T = FlexDirectionProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: FLEXDIRECTION, getValue: transformer})

export const flexDirection =createFlexDirection()

export const flexDirectionRule =createFlexDirectionRule()
