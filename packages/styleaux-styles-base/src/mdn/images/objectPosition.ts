import { ObjectPositionProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const OBJECTPOSITION='objectPosition'

export interface ObjectPositionProps<T=ObjectPositionProperty> {
  /**
   * The **`object-position`** CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/object-position
   */
  [OBJECTPOSITION]: T;
}

export const createObjectPosition = <
  T = ObjectPositionProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<ObjectPositionProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<ObjectPositionProps<T>,Theme,Media>({
    cssProp:OBJECTPOSITION,
    prop:OBJECTPOSITION,
    key,
    transformValue,
  })

export const createObjectPositionRule = <T = ObjectPositionProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: OBJECTPOSITION, getValue: transformer})

export const objectPosition =createObjectPosition()

export const objectPositionRule =createObjectPositionRule()
