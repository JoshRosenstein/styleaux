import { Config } from '../../types';
import { MaskPositionProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const MASKPOSITION = 'maskPosition';

export interface MaskPositionProps<T = MaskPositionProperty> {
  /**
   * The **`mask-position`** CSS property sets the initial position, relative to the mask position layer set by `mask-origin`, for each defined mask image.
   *
   * **Initial value**: `center`
   *
   * |   Chrome    | Firefox |   Safari    |  Edge  | IE  |
   * | :---------: | :-----: | :---------: | :----: | :-: |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | **18** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-position
   */
  [MASKPOSITION]: T;
}

export const createMaskPosition = <
  T = MaskPositionProperty,
  Media = never,
  Theme = never
>(
  config: Config<MaskPositionProps<T>, Theme> = {},
) =>
  style<MaskPositionProps<T>, Theme, Media>({
    cssProp: MASKPOSITION,
    prop: MASKPOSITION,
    ...config,
  });

export const createMaskPositionRule = <T = MaskPositionProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: MASKPOSITION, getValue: transformer });

export const maskPosition = createMaskPosition();

export const maskPositionRule = createMaskPositionRule();
