import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { PaddingBlockStartProperty } from '@styleaux/csstype';

const PADDINGBLOCKSTART = 'paddingBlockStart';

export interface PaddingBlockStartProps<T = PaddingBlockStartProperty> {
  /**
   * The **`padding-block-start`** CSS property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-start
   */
  [PADDINGBLOCKSTART]: T;
}

export const createPaddingBlockStart = <
  T = PaddingBlockStartProperty,
  Media = never,
  Theme = never
>(
  config: Config<PaddingBlockStartProps<T>, Theme> = {},
) =>
  style<PaddingBlockStartProps<T>, Theme, Media>({
    cssProp: PADDINGBLOCKSTART,
    prop: PADDINGBLOCKSTART,
    ...config,
  });

export const createPaddingBlockStartRule = <
  T = PaddingBlockStartProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: PADDINGBLOCKSTART, getValue: transformer });

export const paddingBlockStart = createPaddingBlockStart();

export const paddingBlockStartRule = createPaddingBlockStartRule();
