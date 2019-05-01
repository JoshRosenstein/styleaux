import { FlexGrowProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const FLEXGROW='flexGrow'

export interface FlexGrowProps<T=FlexGrowProperty> {
  /**
   * The **`flex-grow`** CSS property sets how much of the remaining space in the flex container should be assigned to that item (the flex grow factor). The remaining space is the size of the flex container minus the size of all flex items together. If all sibling items have the same flex grow factor, then all items will receive the same share of remaining space, otherwise it is distributed according to the ratio defined by the different flex grow factors.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-grow
   */
  [FLEXGROW]: T;
}

export const createFlexGrow = <
  T = FlexGrowProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<FlexGrowProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<FlexGrowProps<T>,Theme,Media>({
    cssProp:FLEXGROW,
    prop:FLEXGROW,
    key,
    transformValue,
  })

export const createFlexGrowRule = <T = FlexGrowProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: FLEXGROW, getValue: transformer})

export const flexGrow =createFlexGrow()

export const flexGrowRule =createFlexGrowRule()
