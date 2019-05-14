import { PaddingInlineProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const PADDINGINLINE = 'paddingInline';

export interface PaddingInlineProps<T = PaddingInlineProperty> {
  /**
   * The **`padding-inline`** CSS property defines the logical inline start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline
   */
  [PADDINGINLINE]: T;
}

export const createPaddingInline = <
  T = PaddingInlineProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<PaddingInlineProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<PaddingInlineProps<T>, Theme, Media>({
    cssProp: PADDINGINLINE,
    prop: PADDINGINLINE,
    key,
    transform,
  });

export const createPaddingInlineRule = <T = PaddingInlineProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: PADDINGINLINE, getValue: transformer });

export const paddingInline = createPaddingInline();

export const paddingInlineRule = createPaddingInlineRule();
