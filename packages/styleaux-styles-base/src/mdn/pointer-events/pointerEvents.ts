import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { PointerEventsProperty } from '@styleaux/csstype';

const POINTEREVENTS = 'pointerEvents';

export interface PointerEventsProps<T = PointerEventsProperty> {
  /**
   * The **`pointer-events`** CSS property sets under what circumstances (if any) a particular graphic element can become the target of mouse events.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **1**  | **1.5** | **4**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/pointer-events
   */
  [POINTEREVENTS]: T;
}

export const createPointerEvents = <
  T = PointerEventsProperty,
  Media = never,
  Theme = never
>(
  config: Config<PointerEventsProps<T>, Theme> = {},
) =>
  style<PointerEventsProps<T>, Theme, Media>({
    cssProp: POINTEREVENTS,
    prop: POINTEREVENTS,
    ...config,
  });

export const createPointerEventsRule = <T = PointerEventsProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: POINTEREVENTS, getValue: transformer });

export const pointerEvents = createPointerEvents();

export const pointerEventsRule = createPointerEventsRule();
