import { ScrollMarginBlockProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const SCROLLMARGINBLOCK='scrollMarginBlock'

export interface IScrollMarginBlockProps<T> {
  /**
   * The `scroll-margin-block` property is a shorthand property which sets the scroll-margin longhands in the block dimension.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block
   */
  scrollMarginBlock: T;
}

export const scrollMarginBlock = <
  T = ScrollMarginBlockProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IScrollMarginBlockProps<T>, Theme, Breakpoints>({
    cssProp: SCROLLMARGINBLOCK,
    prop: SCROLLMARGINBLOCK,
    alias,
    key,
    transformValue,
  })

export const scrollMarginBlockRule = <T = ScrollMarginBlockProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: SCROLLMARGINBLOCK, getValue: transformer})
