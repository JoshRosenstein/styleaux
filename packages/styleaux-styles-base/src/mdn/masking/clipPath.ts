import { ClipPathProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const CLIPPATH = 'clipPath';

export interface ClipPathProps<T = ClipPathProperty> {
  /**
   * The `**clip-path**` CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.
   *
   * **Initial value**: `none`
   *
   * |  Chrome  | Firefox | Safari |  Edge  |   IE   |
   * | :------: | :-----: | :----: | :----: | :----: |
   * |  **55**  | **3.5** |   No   | **12** | **10** |
   * | 24 _-x-_ |         |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/clip-path
   */
  [CLIPPATH]: T;
}

export const createClipPath = <
  T = ClipPathProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<ClipPathProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<ClipPathProps<T>, Theme, Media>({
    cssProp: CLIPPATH,
    prop: CLIPPATH,
    key,
    transform,
  });

export const createClipPathRule = <T = ClipPathProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: CLIPPATH, getValue: transformer });

export const clipPath = createClipPath();

export const clipPathRule = createClipPathRule();
