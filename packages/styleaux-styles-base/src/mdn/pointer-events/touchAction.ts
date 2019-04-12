import { TouchActionProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler,Getter  } from '@styleaux/core';

const TOUCHACTION='touchAction'

export interface TouchActionProps<T=TouchActionProperty> {
  /**
   * The **`touch-action`** CSS property sets how an element's region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/touch-action
   */
  [TOUCHACTION]: T;
}

export const createTouchAction = <
  T = TouchActionProperty,
  Media = never,
  Theme= never,
>({key, transformValue}: Partial<Pick<StyleOptions<TouchActionProps<T>,Theme>,'key'| 'transformValue'>> =
{}) =>
  style<TouchActionProps<T>,Theme,Media>({
    cssProp:TOUCHACTION,
    prop:TOUCHACTION,
    key,
    transformValue,
  })

export const createTouchActionRule = <T = TouchActionProperty, P=unknown>(
  transformer?: Getter<T,P>,
) => styler<T,P>({cssProp: TOUCHACTION, getValue: transformer})

export const touchAction =createTouchAction()

export const touchActionRule =createTouchActionRule()
