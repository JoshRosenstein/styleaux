import { PaddingLeftProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const PADDINGLEFT='paddingLeft'

export interface PaddingLeftProps<T=PaddingLeftProperty> {
  /**
   * The **`padding-left`** CSS property sets the width of the padding area on the top of an element.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
   */
  [PADDINGLEFT]: T;
}

export const createPaddingLeft = <
  T = PaddingLeftProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<PaddingLeftProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<PaddingLeftProps<T>,Theme,Media>({
    cssProp:PADDINGLEFT,
    prop:PADDINGLEFT,
    key,
    transformValue,
  })

export const createPaddingLeftRule = <T = PaddingLeftProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: PADDINGLEFT, getValue: transformer})

export const paddingLeft =createPaddingLeft()

export const paddingLeftRule =createPaddingLeftRule()
