import { Config } from '../../types';
import { RightProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const RIGHT = 'right';

export interface RightProps<T = RightProperty> {
  /**
   * The **`right`** CSS property participates in specifying the horizontal position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/right
   */
  [RIGHT]: T;
}

export const createRight = <T = RightProperty, Media = never, Theme = never>(
  config: Config<RightProps<T>, Theme> = {},
) =>
  style<RightProps<T>, Theme, Media>({
    cssProp: RIGHT,
    prop: RIGHT,
    ...config,
  });

export const createRightRule = <T = RightProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: RIGHT, getValue: transformer });

export const right = createRight();

export const rightRule = createRightRule();
