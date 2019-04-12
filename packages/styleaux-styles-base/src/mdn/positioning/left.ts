import { LeftProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const LEFT='left'

export interface LeftProps<T=LeftProperty> {
  /**
   * The **`left`** CSS property participates in specifying the horizontal position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/left
   */
  [LEFT]: T;
}

export const createLeft = <
  T = LeftProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<LeftProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<LeftProps<T>,Theme,Media>({
    cssProp:LEFT,
    prop:LEFT,
    key,
    transformValue,
  })

export const createLeftRule = <T = LeftProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: LEFT, getValue: transformer})

export const left =createLeft()

export const leftRule =createLeftRule()
