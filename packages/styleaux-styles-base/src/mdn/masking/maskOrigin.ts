import { Config } from '../../types';
import { MaskOriginProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const MASKORIGIN = 'maskOrigin';

export interface MaskOriginProps<T = MaskOriginProperty> {
  /**
   * The **`mask-origin`** CSS property sets the origin of a mask.
   *
   * **Initial value**: `border-box`
   *
   * | Chrome | Firefox |   Safari    | Edge | IE  |
   * | :----: | :-----: | :---------: | :--: | :-: |
   * |  Yes   | **53**  | **4** _-x-_ |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-origin
   */
  [MASKORIGIN]: T;
}

export const createMaskOrigin = <
  T = MaskOriginProperty,
  Media = never,
  Theme = never
>(
  config: Config<MaskOriginProps<T>, Theme> = {},
) =>
  style<MaskOriginProps<T>, Theme, Media>({
    cssProp: MASKORIGIN,
    prop: MASKORIGIN,
    ...config,
  });

export const createMaskOriginRule = <T = MaskOriginProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: MASKORIGIN, getValue: transformer });

export const maskOrigin = createMaskOrigin();

export const maskOriginRule = createMaskOriginRule();
