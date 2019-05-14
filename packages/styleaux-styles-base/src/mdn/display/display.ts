import { DisplayProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const DISPLAY = 'display';

export interface DisplayProps<T = DisplayProperty> {
  /**
   * The **`display`** CSS property defines the _display type_ of an element, which consists of the two basic qualities of how an element generates boxes — the **outer display type** defining how the box participates in flow layout, and the **inner display type** defining how the children of the box are laid out.
   *
   * **Initial value**: `inline`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/display
   */
  [DISPLAY]: T;
}

export const createDisplay = <
  T = DisplayProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<DisplayProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<DisplayProps<T>, Theme, Media>({
    cssProp: DISPLAY,
    prop: DISPLAY,
    key,
    transform,
  });

export const createDisplayRule = <T = DisplayProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: DISPLAY, getValue: transformer });

export const display = createDisplay();

export const displayRule = createDisplayRule();
