import { Config } from '../../types';
import { CursorProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const CURSOR = 'cursor';

export interface CursorProps<T = CursorProperty> {
  /**
   * The **`cursor`** CSS property sets mouse cursor to display when the mouse pointer is over an element.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/cursor
   */
  [CURSOR]: T;
}

export const createCursor = <T = CursorProperty, Media = never, Theme = never>(
  config: Config<CursorProps<T>, Theme> = {},
) =>
  style<CursorProps<T>, Theme, Media>({
    cssProp: CURSOR,
    prop: CURSOR,
    ...config,
  });

export const createCursorRule = <T = CursorProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: CURSOR, getValue: transformer });

export const cursor = createCursor();

export const cursorRule = createCursorRule();
