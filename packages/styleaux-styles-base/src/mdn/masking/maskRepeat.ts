import { MaskRepeatProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const MASKREPEAT = 'maskRepeat';

export interface MaskRepeatProps<T = MaskRepeatProperty> {
  /**
   * The **`mask-repeat`** CSS property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.
   *
   * **Initial value**: `no-repeat`
   *
   * |   Chrome    | Firefox |   Safari    |  Edge  | IE  |
   * | :---------: | :-----: | :---------: | :----: | :-: |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | **18** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-repeat
   */
  [MASKREPEAT]: T;
}

export const createMaskRepeat = <
  T = MaskRepeatProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<MaskRepeatProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<MaskRepeatProps<T>, Theme, Media>({
    cssProp: MASKREPEAT,
    prop: MASKREPEAT,
    key,
    transform,
  });

export const createMaskRepeatRule = <T = MaskRepeatProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: MASKREPEAT, getValue: transformer });

export const maskRepeat = createMaskRepeat();

export const maskRepeatRule = createMaskRepeatRule();
