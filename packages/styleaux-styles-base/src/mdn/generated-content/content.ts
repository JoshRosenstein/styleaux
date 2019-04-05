import { ContentProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const CONTENT='content'

export interface IContentProps<T> {
  /**
   * The **`content`** CSS property replaces an element with a generated value. Objects inserted using the `content` property are _anonymous replaced elements._
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/content
   */
  content: T;
}

export const createContent = <
  T = ContentProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IContentProps<T>, Theme, Breakpoints>({
    cssProp: CONTENT,
    prop: CONTENT,
    alias,
    key,
    transformValue,
  })

export const createContentRule = <T = ContentProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: CONTENT, getValue: transformer})

export const content =createContent()

export const contentRule =createContentRule()
