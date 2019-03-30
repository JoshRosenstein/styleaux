import { CaptionSideProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const CAPTIONSIDE='captionSide'

export interface ICaptionSideProps<T> {
  /**
   * The **`caption-side`** CSS property puts the content of a table's `<caption>` on the specified side. The values are relative to the `writing-mode` of the table.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/caption-side
   */
  captionSide: T;
}

export const captionSide = <
  T = CaptionSideProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ICaptionSideProps<T>, Theme, Breakpoints>({
    cssProp: CAPTIONSIDE,
    prop: CAPTIONSIDE,
    alias,
    key,
    transformValue,
  })

export const captionSideRule = <T = CaptionSideProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: CAPTIONSIDE, getValue: transformer})
