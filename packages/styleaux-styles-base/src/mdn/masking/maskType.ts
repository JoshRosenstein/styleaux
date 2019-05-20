import { Config } from '../../types';
import { MaskTypeProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const MASKTYPE = 'maskType';

export interface MaskTypeProps<T = MaskTypeProperty> {
  /**
   * The **`mask-type`** CSS property sets whether an SVG `<mask>` element is used as a _luminance_ or an _alpha_ mask. It applies to the `<mask>` element itself.
   *
   * **Initial value**: `luminance`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **24** | **35**  |  n/a   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-type
   */
  [MASKTYPE]: T;
}

export const createMaskType = <
  T = MaskTypeProperty,
  Media = never,
  Theme = never
>(
  config: Config<MaskTypeProps<T>, Theme> = {},
) =>
  style<MaskTypeProps<T>, Theme, Media>({
    cssProp: MASKTYPE,
    prop: MASKTYPE,
    ...config,
  });

export const createMaskTypeRule = <T = MaskTypeProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: MASKTYPE, getValue: transformer });

export const maskType = createMaskType();

export const maskTypeRule = createMaskTypeRule();
