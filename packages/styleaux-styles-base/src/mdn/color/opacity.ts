import { OpacityProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const OPACITY='opacity'

export interface OpacityProps<T=OpacityProperty> {
  /**
   * The **`opacity`** CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/opacity
   */
  [OPACITY]: T;
}

export const createOpacity = <
  T = OpacityProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<OpacityProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<OpacityProps<T>,Theme,Media>({
    cssProp:OPACITY,
    prop:OPACITY,
    key,
    transformValue,
  })

export const createOpacityRule = <T = OpacityProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: OPACITY, getValue: transformer})

export const opacity =createOpacity()

export const opacityRule =createOpacityRule()
