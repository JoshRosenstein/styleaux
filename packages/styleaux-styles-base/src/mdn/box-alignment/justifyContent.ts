import { JustifyContentProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const JUSTIFYCONTENT='justifyContent'

export interface IJustifyContentProps<T> {
  /**
   * The CSS **`justify-content`** property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-content
   */
  justifyContent: T;
}

export const justifyContent = <
  T = JustifyContentProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IJustifyContentProps<T>, Theme, Breakpoints>({
    cssProp: JUSTIFYCONTENT,
    prop: JUSTIFYCONTENT,
    alias,
    key,
    transformValue,
  })

export const justifyContentRule = <T = JustifyContentProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: JUSTIFYCONTENT, getValue: transformer})
