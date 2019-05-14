import { InsetBlockEndProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const INSETBLOCKEND = 'insetBlockEnd';

export interface InsetBlockEndProps<T = InsetBlockEndProperty> {
  /**
   * The **`inset-block-end`** CSS property defines the logical block end offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **63**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-block-end
   */
  [INSETBLOCKEND]: T;
}

export const createInsetBlockEnd = <
  T = InsetBlockEndProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<InsetBlockEndProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<InsetBlockEndProps<T>, Theme, Media>({
    cssProp: INSETBLOCKEND,
    prop: INSETBLOCKEND,
    key,
    transform,
  });

export const createInsetBlockEndRule = <T = InsetBlockEndProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: INSETBLOCKEND, getValue: transformer });

export const insetBlockEnd = createInsetBlockEnd();

export const insetBlockEndRule = createInsetBlockEndRule();
