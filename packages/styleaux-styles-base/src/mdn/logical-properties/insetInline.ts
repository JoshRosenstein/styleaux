import { InsetInlineProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const INSETINLINE = 'insetInline';

export interface InsetInlineProps<T = InsetInlineProperty> {
  /**
   * The **`inset-inline`** CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **63**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-inline
   */
  [INSETINLINE]: T;
}

export const createInsetInline = <
  T = InsetInlineProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<InsetInlineProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<InsetInlineProps<T>, Theme, Media>({
    cssProp: INSETINLINE,
    prop: INSETINLINE,
    key,
    transform,
  });

export const createInsetInlineRule = <T = InsetInlineProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: INSETINLINE, getValue: transformer });

export const insetInline = createInsetInline();

export const insetInlineRule = createInsetInlineRule();
