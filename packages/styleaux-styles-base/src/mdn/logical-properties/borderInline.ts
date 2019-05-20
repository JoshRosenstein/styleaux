import { Config } from '../../types';
import { BorderInlineProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const BORDERINLINE = 'borderInline';

export interface BorderInlineProps<T = BorderInlineProperty> {
  /**
   * The **`border-inline`** CSS property is a shorthand property for setting the individual logical inline border property values in a single place in the style sheet.
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline
   */
  [BORDERINLINE]: T;
}

export const createBorderInline = <
  T = BorderInlineProperty,
  Media = never,
  Theme = never
>(
  config: Config<BorderInlineProps<T>, Theme> = {},
) =>
  style<BorderInlineProps<T>, Theme, Media>({
    cssProp: BORDERINLINE,
    prop: BORDERINLINE,
    ...config,
  });

export const createBorderInlineRule = <T = BorderInlineProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERINLINE, getValue: transformer });

export const borderInline = createBorderInline();

export const borderInlineRule = createBorderInlineRule();
