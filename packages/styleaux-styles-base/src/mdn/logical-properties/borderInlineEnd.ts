import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { BorderInlineEndProperty } from '@styleaux/csstype';

const BORDERINLINEEND = 'borderInlineEnd';

export interface BorderInlineEndProps<T = BorderInlineEndProperty> {
  /**
   * The **`border-inline-end`** CSS property is a shorthand property for setting the individual logical inline-end border property values in a single place in the style sheet.
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end
   */
  [BORDERINLINEEND]: T;
}

export const createBorderInlineEnd = <
  T = BorderInlineEndProperty,
  Media = never,
  Theme = never
>(
  config: Config<BorderInlineEndProps<T>, Theme> = {},
) =>
  style<BorderInlineEndProps<T>, Theme, Media>({
    cssProp: BORDERINLINEEND,
    prop: BORDERINLINEEND,
    ...config,
  });

export const createBorderInlineEndRule = <
  T = BorderInlineEndProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERINLINEEND, getValue: transformer });

export const borderInlineEnd = createBorderInlineEnd();

export const borderInlineEndRule = createBorderInlineEndRule();
