import { Config } from '../../types';
import { MaskProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const MASK = 'mask';

export interface MaskProps<T = MaskProperty> {
  /**
   * The **`mask`** CSS property hides an element (partially or fully) by masking or clipping the image at specific points.
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **1**  |  **2**  | **4**  | **12** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask
   */
  [MASK]: T;
}

export const createMask = <T = MaskProperty, Media = never, Theme = never>(
  config: Config<MaskProps<T>, Theme> = {},
) =>
  style<MaskProps<T>, Theme, Media>({
    cssProp: MASK,
    prop: MASK,
    ...config,
  });

export const createMaskRule = <T = MaskProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: MASK, getValue: transformer });

export const mask = createMask();

export const maskRule = createMaskRule();
