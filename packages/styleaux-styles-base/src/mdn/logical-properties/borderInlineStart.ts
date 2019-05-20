import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { BorderInlineStartProperty } from '@styleaux/csstype';

const BORDERINLINESTART = 'borderInlineStart';

export interface BorderInlineStartProps<T = BorderInlineStartProperty> {
  /**
   * The **`border-inline-start`** CSS property is a shorthand property for setting the individual logical inline-start border property values in a single place in the style sheet.
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start
   */
  [BORDERINLINESTART]: T;
}

export const createBorderInlineStart = <
  T = BorderInlineStartProperty,
  Media = never,
  Theme = never
>(
  config: Config<BorderInlineStartProps<T>, Theme> = {},
) =>
  style<BorderInlineStartProps<T>, Theme, Media>({
    cssProp: BORDERINLINESTART,
    prop: BORDERINLINESTART,
    ...config,
  });

export const createBorderInlineStartRule = <
  T = BorderInlineStartProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERINLINESTART, getValue: transformer });

export const borderInlineStart = createBorderInlineStart();

export const borderInlineStartRule = createBorderInlineStartRule();
