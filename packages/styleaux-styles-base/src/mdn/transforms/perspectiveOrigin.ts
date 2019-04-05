import { PerspectiveOriginProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const PERSPECTIVEORIGIN='perspectiveOrigin'

export interface IPerspectiveOriginProps<T> {
  /**
   * The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective-origin
   */
  perspectiveOrigin: T;
}

export const createPerspectiveOrigin = <
  T = PerspectiveOriginProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IPerspectiveOriginProps<T>, Theme, Breakpoints>({
    cssProp: PERSPECTIVEORIGIN,
    prop: PERSPECTIVEORIGIN,
    alias,
    key,
    transformValue,
  })

export const createPerspectiveOriginRule = <T = PerspectiveOriginProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: PERSPECTIVEORIGIN, getValue: transformer})

export const perspectiveOrigin =createPerspectiveOrigin()

export const perspectiveOriginRule =createPerspectiveOriginRule()
