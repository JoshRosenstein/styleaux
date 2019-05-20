import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { BorderBlockStartWidthProperty } from '@styleaux/csstype';

const BORDERBLOCKSTARTWIDTH = 'borderBlockStartWidth';

export interface BorderBlockStartWidthProps<T = BorderBlockStartWidthProperty> {
  /**
   * The **`border-block-start-width`** CSS property defines the width of the logical block-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-width
   */
  [BORDERBLOCKSTARTWIDTH]: T;
}

export const createBorderBlockStartWidth = <
  T = BorderBlockStartWidthProperty,
  Media = never,
  Theme = never
>(
  config: Config<BorderBlockStartWidthProps<T>, Theme> = {},
) =>
  style<BorderBlockStartWidthProps<T>, Theme, Media>({
    cssProp: BORDERBLOCKSTARTWIDTH,
    prop: BORDERBLOCKSTARTWIDTH,
    ...config,
  });

export const createBorderBlockStartWidthRule = <
  T = BorderBlockStartWidthProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERBLOCKSTARTWIDTH, getValue: transformer });

export const borderBlockStartWidth = createBorderBlockStartWidth();

export const borderBlockStartWidthRule = createBorderBlockStartWidthRule();
