import { MaskImageProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const MASKIMAGE = 'maskImage';

export interface MaskImageProps<T = MaskImageProperty> {
  /**
   * The **`mask-image`** CSS property sets the image that is used as mask layer for an element.
   *
   * **Initial value**: `none`
   *
   * |   Chrome    | Firefox |   Safari    |  Edge  | IE  |
   * | :---------: | :-----: | :---------: | :----: | :-: |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-image
   */
  [MASKIMAGE]: T;
}

export const createMaskImage = <
  T = MaskImageProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<MaskImageProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<MaskImageProps<T>, Theme, Media>({
    cssProp: MASKIMAGE,
    prop: MASKIMAGE,
    key,
    transform,
  });

export const createMaskImageRule = <T = MaskImageProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: MASKIMAGE, getValue: transformer });

export const maskImage = createMaskImage();

export const maskImageRule = createMaskImageRule();
