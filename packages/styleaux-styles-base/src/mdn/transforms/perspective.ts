import { PerspectiveProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const PERSPECTIVE='perspective'

export interface PerspectiveProps<T=PerspectiveProperty> {
  /**
   * The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective. Each 3D element with z>0 becomes larger; each 3D-element with z<0 becomes smaller. The strength of the effect is determined by the value of this property.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective
   */
  [PERSPECTIVE]: T;
}

export const createPerspective = <
  T = PerspectiveProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<PerspectiveProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<PerspectiveProps<T>,Theme,Media>({
    cssProp:PERSPECTIVE,
    prop:PERSPECTIVE,
    key,
    transformValue,
  })

export const createPerspectiveRule = <T = PerspectiveProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: PERSPECTIVE, getValue: transformer})

export const perspective =createPerspective()

export const perspectiveRule =createPerspectiveRule()
