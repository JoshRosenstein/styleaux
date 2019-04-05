import { TouchActionProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter } from '@styleaux/core';

const TOUCHACTION='touchAction'

export interface ITouchActionProps<T> {
  /**
   * The **`touch-action`** CSS property sets how an element's region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/touch-action
   */
  touchAction: T;
}

export const createTouchAction = <
  T = TouchActionProperty,
  Theme = never,
  Breakpoints = never
>({key, transformValue, alias}: Partial<StyleOptions> = {}) =>
  style<ITouchActionProps<T>, Theme, Breakpoints>({
    cssProp: TOUCHACTION,
    prop: TOUCHACTION,
    alias,
    key,
    transformValue,
  })

export const createTouchActionRule = <T = TouchActionProperty>(
  transformer?: Getter,
) => styler<T>({cssProp: TOUCHACTION, getValue: transformer})

export const touchAction =createTouchAction()

export const touchActionRule =createTouchActionRule()
