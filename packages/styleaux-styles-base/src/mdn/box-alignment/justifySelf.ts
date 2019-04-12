import { JustifySelfProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const JUSTIFYSELF='justifySelf'

export interface JustifySelfProps<T=JustifySelfProperty> {
  /**
   * The CSS **`justify-self`** property set the way a box is justified inside its alignment container along the appropriate axis.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-self
   */
  [JUSTIFYSELF]: T;
}

export const createJustifySelf = <
  T = JustifySelfProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<JustifySelfProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<JustifySelfProps<T>,Theme,Media>({
    cssProp:JUSTIFYSELF,
    prop:JUSTIFYSELF,
    key,
    transformValue,
  })

export const createJustifySelfRule = <T = JustifySelfProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: JUSTIFYSELF, getValue: transformer})

export const justifySelf =createJustifySelf()

export const justifySelfRule =createJustifySelfRule()
