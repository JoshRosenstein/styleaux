import { CaretColorProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const CARETCOLOR='caretColor'

export interface ICaretColorProps<T> {
  /**
   * The **`caret-color`** CSS property sets the color of the insertion caret, the visible marker where the next character typed will be inserted. The caret appears in elements such as `<input>` or those with the `contenteditable` attribute. The caret is typically a thin vertical line that flashes to help make it more noticeable. By default, it is black, but its color can be altered with this property.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/caret-color
   */
  caretColor: T;
}

export const createCaretColor = <
  T = CaretColorProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ICaretColorProps<T>, Theme, Breakpoints>({
    cssProp: CARETCOLOR,
    prop: CARETCOLOR,
    alias,
    key,
    transformValue,
  })

export const createCaretColorRule = <T = CaretColorProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: CARETCOLOR, getValue: transformer})

export const caretColor =createCaretColor()

export const caretColorRule =createCaretColorRule()
