import { FlexWrapProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const FLEXWRAP='flexWrap'

export interface FlexWrapProps<T=FlexWrapProperty> {
  /**
   * The **`flex-wrap`** CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-wrap
   */
  [FLEXWRAP]: T;
}

export const createFlexWrap = <
  T = FlexWrapProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<FlexWrapProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<FlexWrapProps<T>,Theme,Media>({
    cssProp:FLEXWRAP,
    prop:FLEXWRAP,
    key,
    transformValue,
  })

export const createFlexWrapRule = <T = FlexWrapProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: FLEXWRAP, getValue: transformer})

export const flexWrap =createFlexWrap()

export const flexWrapRule =createFlexWrapRule()
