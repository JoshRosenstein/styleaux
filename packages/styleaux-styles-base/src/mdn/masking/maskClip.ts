import { MaskClipProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const MASKCLIP = 'maskClip';

export interface MaskClipProps<T = MaskClipProperty> {
  /**
   * The **`mask-clip`** CSS property determines the area, which is affected by a mask. The painted content of an element must be restricted to this area.
   *
   * **Initial value**: `border-box`
   *
   * | Chrome | Firefox |   Safari    | Edge | IE  |
   * | :----: | :-----: | :---------: | :--: | :-: |
   * |  Yes   | **53**  | **4** _-x-_ |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-clip
   */
  [MASKCLIP]: T;
}

export const createMaskClip = <
  T = MaskClipProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<MaskClipProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<MaskClipProps<T>, Theme, Media>({
    cssProp: MASKCLIP,
    prop: MASKCLIP,
    key,
    transformValue,
  });

export const createMaskClipRule = <T = MaskClipProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: MASKCLIP, getValue: transformer });

export const maskClip = createMaskClip();

export const maskClipRule = createMaskClipRule();
