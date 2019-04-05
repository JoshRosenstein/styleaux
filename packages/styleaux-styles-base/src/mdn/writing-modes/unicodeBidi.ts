import { UnicodeBidiProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const UNICODEBIDI='unicodeBidi'

export interface IUnicodeBidiProps<T> {
  /**
   * The **`unicode-bidi`** CSS property, together with the `direction` property, determines how bidirectional text in a document is handled. For example, if a block of content contains both left-to-right and right-to-left text, the user-agent uses a complex Unicode algorithm to decide how to display the text. The `unicode-bidi` property overrides this algorithm and allows the developer to control the text embedding.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/unicode-bidi
   */
  unicodeBidi: T;
}

export const createUnicodeBidi = <
  T = UnicodeBidiProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IUnicodeBidiProps<T>, Theme, Breakpoints>({
    cssProp: UNICODEBIDI,
    prop: UNICODEBIDI,
    alias,
    key,
    transformValue,
  })

export const createUnicodeBidiRule = <T = UnicodeBidiProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: UNICODEBIDI, getValue: transformer})

export const unicodeBidi =createUnicodeBidi()

export const unicodeBidiRule =createUnicodeBidiRule()
