import { WordWrapProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const WORDWRAP='wordWrap'

export interface IWordWrapProps<T> {
  /**
   * The `**overflow-wrap**` CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  wordWrap: T;
}

export const createWordWrap = <
  T = WordWrapProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IWordWrapProps<T>, Theme, Breakpoints>({
    cssProp: WORDWRAP,
    prop: WORDWRAP,
    alias,
    key,
    transformValue,
  })

export const createWordWrapRule = <T = WordWrapProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: WORDWRAP, getValue: transformer})

export const wordWrap =createWordWrap()

export const wordWrapRule =createWordWrapRule()
