import { TextRenderingProperty } from '@styleaux/csstype';

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

export const createTextRendering = <
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

export const createTextRenderingRule = <T = TextRenderingProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TEXTRENDERING, getValue: transformer})

export const textRendering =createTextRendering()

export const textRenderingRule =createTextRenderingRule()
