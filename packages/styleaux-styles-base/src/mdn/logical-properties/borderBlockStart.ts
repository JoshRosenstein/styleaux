import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { BorderBlockStartProperty } from '@styleaux/csstype';

const BORDERBLOCKSTART = 'borderBlockStart';

export interface BorderBlockStartProps<T = BorderBlockStartProperty> {
  /**
   * The **`border-block-start`** CSS property is a shorthand property for setting the individual logical block-start border property values in a single place in the style sheet.
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start
   */
  [BORDERBLOCKSTART]: T;
}

export const createBorderBlockStart = <
  T = BorderBlockStartProperty,
  Media = never,
  Theme = never
>(
  config: Config<BorderBlockStartProps<T>, Theme> = {},
) =>
  style<BorderBlockStartProps<T>, Theme, Media>({
    cssProp: BORDERBLOCKSTART,
    prop: BORDERBLOCKSTART,
    ...config,
  });

export const createBorderBlockStartRule = <
  T = BorderBlockStartProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERBLOCKSTART, getValue: transformer });

export const borderBlockStart = createBorderBlockStart();

export const borderBlockStartRule = createBorderBlockStartRule();
