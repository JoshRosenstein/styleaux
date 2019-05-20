import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { BorderInlineStartWidthProperty } from '@styleaux/csstype';

const BORDERINLINESTARTWIDTH = 'borderInlineStartWidth';

export interface BorderInlineStartWidthProps<
  T = BorderInlineStartWidthProperty
> {
  /**
   * The **`border-inline-start-width`** CSS property defines the width of the logical inline-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **69** | **41**  | **12.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width
   */
  [BORDERINLINESTARTWIDTH]: T;
}

export const createBorderInlineStartWidth = <
  T = BorderInlineStartWidthProperty,
  Media = never,
  Theme = never
>(
  config: Config<BorderInlineStartWidthProps<T>, Theme> = {},
) =>
  style<BorderInlineStartWidthProps<T>, Theme, Media>({
    cssProp: BORDERINLINESTARTWIDTH,
    prop: BORDERINLINESTARTWIDTH,
    ...config,
  });

export const createBorderInlineStartWidthRule = <
  T = BorderInlineStartWidthProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERINLINESTARTWIDTH, getValue: transformer });

export const borderInlineStartWidth = createBorderInlineStartWidth();

export const borderInlineStartWidthRule = createBorderInlineStartWidthRule();
