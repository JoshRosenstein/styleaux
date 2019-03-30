import { FlexWrapProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const FLEXWRAP='flexWrap'

export interface IFlexWrapProps<T> {
  /**
   * The **`flex-wrap`** CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-wrap
   */
  flexWrap: T;
}

export const flexWrap = <
  T = FlexWrapProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IFlexWrapProps<T>, Theme, Breakpoints>({
    cssProp: FLEXWRAP,
    prop: FLEXWRAP,
    alias,
    key,
    transformValue,
  })

export const flexWrapRule = <T = FlexWrapProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: FLEXWRAP, getValue: transformer})
