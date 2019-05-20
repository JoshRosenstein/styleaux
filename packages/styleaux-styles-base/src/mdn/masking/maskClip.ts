import { Config } from '../../types';
import { MaskClipProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

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
>(
  config: Config<MaskClipProps<T>, Theme> = {},
) =>
  style<MaskClipProps<T>, Theme, Media>({
    cssProp: MASKCLIP,
    prop: MASKCLIP,
    ...config,
  });

export const createMaskClipRule = <T = MaskClipProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: MASKCLIP, getValue: transformer });

export const maskClip = createMaskClip();

export const maskClipRule = createMaskClipRule();
