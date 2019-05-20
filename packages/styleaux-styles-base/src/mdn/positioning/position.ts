import { Config } from '../../types';
import { PositionProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const POSITION = 'position';

export interface PositionProps<T = PositionProperty> {
  /**
   * The **`position`** CSS property sets how an element is positioned in a document. The `top`, `right`, `bottom`, and `left` properties determine the final location of positioned elements.
   *
   * **Initial value**: `static`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/position
   */
  [POSITION]: T;
}

export const createPosition = <
  T = PositionProperty,
  Media = never,
  Theme = never
>(
  config: Config<PositionProps<T>, Theme> = {},
) =>
  style<PositionProps<T>, Theme, Media>({
    cssProp: POSITION,
    prop: POSITION,
    ...config,
  });

export const createPositionRule = <T = PositionProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: POSITION, getValue: transformer });

export const position = createPosition();

export const positionRule = createPositionRule();
