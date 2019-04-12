import { PerspectiveOriginProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const PERSPECTIVEORIGIN='perspectiveOrigin'

export interface PerspectiveOriginProps<T=PerspectiveOriginProperty> {
  /**
   * The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective-origin
   */
  [PERSPECTIVEORIGIN]: T;
}

export const createPerspectiveOrigin = <
  T = PerspectiveOriginProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<PerspectiveOriginProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<PerspectiveOriginProps<T>,Theme,Media>({
    cssProp:PERSPECTIVEORIGIN,
    prop:PERSPECTIVEORIGIN,
    key,
    transformValue,
  })

export const createPerspectiveOriginRule = <T = PerspectiveOriginProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: PERSPECTIVEORIGIN, getValue: transformer})

export const perspectiveOrigin =createPerspectiveOrigin()

export const perspectiveOriginRule =createPerspectiveOriginRule()
