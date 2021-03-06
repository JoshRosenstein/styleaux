import { Config } from '../../types';
import { TouchActionProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const TOUCHACTION = 'touchAction';

export interface TouchActionProps<T = TouchActionProperty> {
  /**
   * The **`touch-action`** CSS property sets how a region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |    IE    |
   * | :----: | :-----: | :----: | :----: | :------: |
   * | **36** | **52**  |   No   | **12** |  **11**  |
   * |        |         |        |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/touch-action
   */
  [TOUCHACTION]: T;
}

export const createTouchAction = <
  T = TouchActionProperty,
  Media = never,
  Theme = never
>(
  config: Config<TouchActionProps<T>, Theme> = {},
) =>
  style<TouchActionProps<T>, Theme, Media>({
    cssProp: TOUCHACTION,
    prop: TOUCHACTION,
    ...config,
  });

export const createTouchActionRule = <T = TouchActionProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TOUCHACTION, getValue: transformer });

export const touchAction = createTouchAction();

export const touchActionRule = createTouchActionRule();
