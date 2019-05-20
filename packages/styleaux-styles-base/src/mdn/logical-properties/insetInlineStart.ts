import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { InsetInlineStartProperty } from '@styleaux/csstype';

const INSETINLINESTART = 'insetInlineStart';

export interface InsetInlineStartProps<T = InsetInlineStartProperty> {
  /**
   * The **`inset-inline-start`** CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **63**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-inline-start
   */
  [INSETINLINESTART]: T;
}

export const createInsetInlineStart = <
  T = InsetInlineStartProperty,
  Media = never,
  Theme = never
>(
  config: Config<InsetInlineStartProps<T>, Theme> = {},
) =>
  style<InsetInlineStartProps<T>, Theme, Media>({
    cssProp: INSETINLINESTART,
    prop: INSETINLINESTART,
    ...config,
  });

export const createInsetInlineStartRule = <
  T = InsetInlineStartProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: INSETINLINESTART, getValue: transformer });

export const insetInlineStart = createInsetInlineStart();

export const insetInlineStartRule = createInsetInlineStartRule();
