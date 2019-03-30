import { AlignContentProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const ALIGNCONTENT='alignContent'

export interface IAlignContentProps<T> {
  /**
   * The CSS **`align-content`** property sets the distribution of space around content items of a flexbox or grid container. It applies to a flexbox's cross-axis or a grid's tracks.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-content
   */
  alignContent: T;
}

export const alignContent = <
  T = AlignContentProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IAlignContentProps<T>, Theme, Breakpoints>({
    cssProp: ALIGNCONTENT,
    prop: ALIGNCONTENT,
    alias,
    key,
    transformValue,
  })

export const alignContentRule = <T = AlignContentProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: ALIGNCONTENT, getValue: transformer})
