import { Config } from '../../types';
import { ClearProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const CLEAR = 'clear';

export interface ClearProps<T = ClearProperty> {
  /**
   * The **`clear`** CSS property sets whether an element must be moved below (cleared) floating elements that precede it. The `clear` property applies to floating and non-floating elements.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/clear
   */
  [CLEAR]: T;
}

export const createClear = <T = ClearProperty, Media = never, Theme = never>(
  config: Config<ClearProps<T>, Theme> = {},
) =>
  style<ClearProps<T>, Theme, Media>({
    cssProp: CLEAR,
    prop: CLEAR,
    ...config,
  });

export const createClearRule = <T = ClearProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: CLEAR, getValue: transformer });

export const clear = createClear();

export const clearRule = createClearRule();
