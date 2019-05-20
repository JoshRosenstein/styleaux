import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { BorderBlockEndProperty } from '@styleaux/csstype';

const BORDERBLOCKEND = 'borderBlockEnd';

export interface BorderBlockEndProps<T = BorderBlockEndProperty> {
  /**
   * The **`border-block-end`** CSS property is a shorthand property for setting the individual logical block-end border property values in a single place in the style sheet.
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end
   */
  [BORDERBLOCKEND]: T;
}

export const createBorderBlockEnd = <
  T = BorderBlockEndProperty,
  Media = never,
  Theme = never
>(
  config: Config<BorderBlockEndProps<T>, Theme> = {},
) =>
  style<BorderBlockEndProps<T>, Theme, Media>({
    cssProp: BORDERBLOCKEND,
    prop: BORDERBLOCKEND,
    ...config,
  });

export const createBorderBlockEndRule = <
  T = BorderBlockEndProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERBLOCKEND, getValue: transformer });

export const borderBlockEnd = createBorderBlockEnd();

export const borderBlockEndRule = createBorderBlockEndRule();
