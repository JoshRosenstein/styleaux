import { ContentProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const CONTENT='content'

export interface ContentProps<T=ContentProperty> {
  /**
   * The **`content`** CSS property replaces an element with a generated value. Objects inserted using the `content` property are _anonymous replaced elements._
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/content
   */
  [CONTENT]: T;
}

export const createContent = <
  T = ContentProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<ContentProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<ContentProps<T>,Theme,Media>({
    cssProp:CONTENT,
    prop:CONTENT,
    key,
    transformValue,
  })

export const createContentRule = <T = ContentProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: CONTENT, getValue: transformer})

export const content =createContent()

export const contentRule =createContentRule()
