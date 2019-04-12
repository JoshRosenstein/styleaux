import { CaretColorProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const CARETCOLOR='caretColor'

export interface CaretColorProps<T=CaretColorProperty> {
  /**
   * The **`caret-color`** CSS property sets the color of the insertion caret, the visible marker where the next character typed will be inserted. The caret appears in elements such as `<input>` or those with the `contenteditable` attribute. The caret is typically a thin vertical line that flashes to help make it more noticeable. By default, it is black, but its color can be altered with this property.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/caret-color
   */
  [CARETCOLOR]: T;
}

export const createCaretColor = <
  T = CaretColorProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<CaretColorProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<CaretColorProps<T>,Theme,Media>({
    cssProp:CARETCOLOR,
    prop:CARETCOLOR,
    key,
    transformValue,
  })

export const createCaretColorRule = <T = CaretColorProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: CARETCOLOR, getValue: transformer})

export const caretColor =createCaretColor()

export const caretColorRule =createCaretColorRule()
