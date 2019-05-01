import { WritingModeProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const WRITINGMODE='writingMode'

export interface WritingModeProps<T=WritingModeProperty> {
  /**
   * The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/writing-mode
   */
  [WRITINGMODE]: T;
}

export const createWritingMode = <
  T = WritingModeProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<WritingModeProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<WritingModeProps<T>,Theme,Media>({
    cssProp:WRITINGMODE,
    prop:WRITINGMODE,
    key,
    transformValue,
  })

export const createWritingModeRule = <T = WritingModeProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: WRITINGMODE, getValue: transformer})

export const writingMode =createWritingMode()

export const writingModeRule =createWritingModeRule()
