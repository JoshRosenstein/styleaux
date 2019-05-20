import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { InsetInlineEndProperty } from '@styleaux/csstype';

const INSETINLINEEND = 'insetInlineEnd';

export interface InsetInlineEndProps<T = InsetInlineEndProperty> {
  /**
   * The **`inset-inline-end`** CSS property defines the logical inline end inset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **63**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-inline-end
   */
  [INSETINLINEEND]: T;
}

export const createInsetInlineEnd = <
  T = InsetInlineEndProperty,
  Media = never,
  Theme = never
>(
  config: Config<InsetInlineEndProps<T>, Theme> = {},
) =>
  style<InsetInlineEndProps<T>, Theme, Media>({
    cssProp: INSETINLINEEND,
    prop: INSETINLINEEND,
    ...config,
  });

export const createInsetInlineEndRule = <
  T = InsetInlineEndProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: INSETINLINEEND, getValue: transformer });

export const insetInlineEnd = createInsetInlineEnd();

export const insetInlineEndRule = createInsetInlineEndRule();
