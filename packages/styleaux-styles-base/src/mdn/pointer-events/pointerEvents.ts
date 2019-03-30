import { PointerEventsProperty } from '@roseys/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const POINTEREVENTS='pointerEvents'

export interface IPointerEventsProps<T> {
  /**
   * The **`pointer-events`** CSS property sets under what circumstances (if any) a particular graphic element can become the target of pointer events.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/pointer-events
   */
  pointerEvents: T;
}

export const pointerEvents = <
  T = PointerEventsProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<IPointerEventsProps<T>, Theme, Breakpoints>({
    cssProp: POINTEREVENTS,
    prop: POINTEREVENTS,
    alias,
    key,
    transformValue,
  })

export const pointerEventsRule = <T = PointerEventsProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: POINTEREVENTS, getValue: transformer})
