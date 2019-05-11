import { LineHeightStepProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const LINEHEIGHTSTEP = 'lineHeightStep';

export interface LineHeightStepProps<T = LineHeightStepProperty> {
  /**
   * The **`line-height-step`** CSS property sets the step unit for line box heights. When the property is set, line box heights are rounded up to the closest multiple of the unit.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   |   No    |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-height-step
   */
  [LINEHEIGHTSTEP]: T;
}

export const createLineHeightStep = <
  T = LineHeightStepProperty,
  Media = never,
  Theme = never
>({
  key,
  transformValue,
}: Partial<
  Pick<StyleOptions<LineHeightStepProps<T>, Theme>, 'key' | 'transformValue'>
> = {}) =>
  style<LineHeightStepProps<T>, Theme, Media>({
    cssProp: LINEHEIGHTSTEP,
    prop: LINEHEIGHTSTEP,
    key,
    transformValue,
  });

export const createLineHeightStepRule = <
  T = LineHeightStepProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: LINEHEIGHTSTEP, getValue: transformer });

export const lineHeightStep = createLineHeightStep();

export const lineHeightStepRule = createLineHeightStepRule();
