import { TextRenderingProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const TEXTRENDERING='textRendering'

export interface ITextRenderingProps<T> {
  /**
   * The **`text-rendering`** CSS property provides information to the rendering engine about what to optimize for when rendering text.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-rendering
   */
  textRendering: T;
}

export const textRendering = <
  T = TextRenderingProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ITextRenderingProps<T>, Theme, Breakpoints>({
    cssProp: TEXTRENDERING,
    prop: TEXTRENDERING,
    alias,
    key,
    transformValue,
  })

export const textRenderingRule = <T = TextRenderingProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TEXTRENDERING, getValue: transformer})
