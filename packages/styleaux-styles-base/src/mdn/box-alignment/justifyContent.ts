import { JustifyContentProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const JUSTIFYCONTENT='justifyContent'

export interface JustifyContentProps<T=JustifyContentProperty> {
  /**
   * The CSS **`justify-content`** property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-content
   */
  [JUSTIFYCONTENT]: T;
}

export const createJustifyContent = <
  T = JustifyContentProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<JustifyContentProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<JustifyContentProps<T>,Theme,Media>({
    cssProp:JUSTIFYCONTENT,
    prop:JUSTIFYCONTENT,
    key,
    transformValue,
  })

export const createJustifyContentRule = <T = JustifyContentProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: JUSTIFYCONTENT, getValue: transformer})

export const justifyContent =createJustifyContent()

export const justifyContentRule =createJustifyContentRule()
