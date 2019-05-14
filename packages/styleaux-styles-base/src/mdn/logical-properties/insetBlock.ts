import { InsetBlockProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const INSETBLOCK = 'insetBlock';

export interface InsetBlockProps<T = InsetBlockProperty> {
  /**
   * The **`inset-block`** CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **63**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-block
   */
  [INSETBLOCK]: T;
}

export const createInsetBlock = <
  T = InsetBlockProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<InsetBlockProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<InsetBlockProps<T>, Theme, Media>({
    cssProp: INSETBLOCK,
    prop: INSETBLOCK,
    key,
    transform,
  });

export const createInsetBlockRule = <T = InsetBlockProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: INSETBLOCK, getValue: transformer });

export const insetBlock = createInsetBlock();

export const insetBlockRule = createInsetBlockRule();
