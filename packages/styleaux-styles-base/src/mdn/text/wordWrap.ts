import { WordWrapProperty } from '@roseys/csstype';

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

export const wordWrap = <
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

export const wordWrapRule = <T = WordWrapProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: WORDWRAP, getValue: transformer})
