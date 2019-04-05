import { WritingModeProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const WRITINGMODE='writingMode'

export interface IWritingModeProps<T> {
  /**
   * The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/writing-mode
   */
  writingMode: T;
}

export const createWritingMode = <
  T = WritingModeProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IWritingModeProps<T>, Theme, Breakpoints>({
    cssProp: WRITINGMODE,
    prop: WRITINGMODE,
    alias,
    key,
    transformValue,
  })

export const createWritingModeRule = <T = WritingModeProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: WRITINGMODE, getValue: transformer})

export const writingMode =createWritingMode()

export const writingModeRule =createWritingModeRule()
