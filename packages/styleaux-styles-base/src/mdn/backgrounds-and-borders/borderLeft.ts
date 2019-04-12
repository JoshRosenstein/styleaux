import { BorderLeftProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const BORDERLEFT='borderLeft'

export interface BorderLeftProps<T=BorderLeftProperty> {
  /**
   * The **`border-left`** CSS property is a shorthand that sets the values of `border-left-width`, `border-left-style` and `border-left-color`. These properties set an element's left border.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left
   */
  [BORDERLEFT]: T;
}

export const createBorderLeft = <
  T = BorderLeftProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<BorderLeftProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<BorderLeftProps<T>,Theme,Media>({
    cssProp:BORDERLEFT,
    prop:BORDERLEFT,
    key,
    transformValue,
  })

export const createBorderLeftRule = <T = BorderLeftProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: BORDERLEFT, getValue: transformer})

export const borderLeft =createBorderLeft()

export const borderLeftRule =createBorderLeftRule()
