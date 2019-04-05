import { PointerEventsProperty } from '@styleaux/csstype';

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

export const createPointerEvents = <
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

export const createPointerEventsRule = <T = PointerEventsProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: POINTEREVENTS, getValue: transformer})

export const pointerEvents =createPointerEvents()

export const pointerEventsRule =createPointerEventsRule()
