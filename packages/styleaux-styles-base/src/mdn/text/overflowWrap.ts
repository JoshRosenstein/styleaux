import { OverflowWrapProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const OVERFLOWWRAP='overflowWrap'

export interface IOverflowWrapProps<T> {
  /**
   * The `**overflow-wrap**` CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  overflowWrap: T;
}

export const createOverflowWrap = <
  T = OverflowWrapProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IOverflowWrapProps<T>, Theme, Breakpoints>({
    cssProp: OVERFLOWWRAP,
    prop: OVERFLOWWRAP,
    alias,
    key,
    transformValue,
  })

export const createOverflowWrapRule = <T = OverflowWrapProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: OVERFLOWWRAP, getValue: transformer})

export const overflowWrap =createOverflowWrap()

export const overflowWrapRule =createOverflowWrapRule()
