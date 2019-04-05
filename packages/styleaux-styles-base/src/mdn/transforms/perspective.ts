import { PerspectiveProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const PERSPECTIVE='perspective'

export interface IPerspectiveProps<T> {
  /**
   * The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective. Each 3D element with z>0 becomes larger; each 3D-element with z<0 becomes smaller. The strength of the effect is determined by the value of this property.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective
   */
  perspective: T;
}

export const createPerspective = <
  T = PerspectiveProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IPerspectiveProps<T>, Theme, Breakpoints>({
    cssProp: PERSPECTIVE,
    prop: PERSPECTIVE,
    alias,
    key,
    transformValue,
  })

export const createPerspectiveRule = <T = PerspectiveProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: PERSPECTIVE, getValue: transformer})

export const perspective =createPerspective()

export const perspectiveRule =createPerspectiveRule()
