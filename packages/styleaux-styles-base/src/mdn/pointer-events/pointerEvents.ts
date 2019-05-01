import { PointerEventsProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const POINTEREVENTS='pointerEvents'

export interface PointerEventsProps<T=PointerEventsProperty> {
  /**
   * The **`pointer-events`** CSS property sets under what circumstances (if any) a particular graphic element can become the target of pointer events.
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/pointer-events
   */
  [POINTEREVENTS]: T;
}

export const createPointerEvents = <
  T = PointerEventsProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<PointerEventsProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<PointerEventsProps<T>,Theme,Media>({
    cssProp:POINTEREVENTS,
    prop:POINTEREVENTS,
    key,
    transformValue,
  })

export const createPointerEventsRule = <T = PointerEventsProperty, P=unknown>(
  transformer?: GetValue<T,P>,
) => styler<T,P>({cssProp: POINTEREVENTS, getValue: transformer})

export const pointerEvents =createPointerEvents()

export const pointerEventsRule =createPointerEventsRule()
