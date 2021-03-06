import { Config } from '../../types';
import { PaddingBlockProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const PADDINGBLOCK = 'paddingBlock';

export interface PaddingBlockProps<T = PaddingBlockProperty> {
  /**
   * The **`padding-block`** CSS property defines the logical block start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block
   */
  [PADDINGBLOCK]: T;
}

export const createPaddingBlock = <
  T = PaddingBlockProperty,
  Media = never,
  Theme = never
>(
  config: Config<PaddingBlockProps<T>, Theme> = {},
) =>
  style<PaddingBlockProps<T>, Theme, Media>({
    cssProp: PADDINGBLOCK,
    prop: PADDINGBLOCK,
    ...config,
  });

export const createPaddingBlockRule = <T = PaddingBlockProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: PADDINGBLOCK, getValue: transformer });

export const paddingBlock = createPaddingBlock();

export const paddingBlockRule = createPaddingBlockRule();
