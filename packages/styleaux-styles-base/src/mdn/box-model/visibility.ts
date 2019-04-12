import { VisibilityProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const VISIBILITY='visibility'

export interface VisibilityProps<T=VisibilityProperty> {
  /**
   * The **`visibility`** CSS property shows or hides an element without changing the layout of a document. The property can also hide rows or columns in a `<table>`.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/visibility
   */
  [VISIBILITY]: T;
}

export const createVisibility = <
  T = VisibilityProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<VisibilityProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<VisibilityProps<T>,Theme,Media>({
    cssProp:VISIBILITY,
    prop:VISIBILITY,
    key,
    transformValue,
  })

export const createVisibilityRule = <T = VisibilityProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: VISIBILITY, getValue: transformer})

export const visibility =createVisibility()

export const visibilityRule =createVisibilityRule()
