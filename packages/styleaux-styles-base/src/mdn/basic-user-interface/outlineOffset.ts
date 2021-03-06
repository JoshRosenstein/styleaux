import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { OutlineOffsetProperty } from '@styleaux/csstype';

const OUTLINEOFFSET = 'outlineOffset';

export interface OutlineOffsetProps<T = OutlineOffsetProperty> {
  /**
   * The **`outline-offset`** CSS property sets the amount of space between an outline and the edge or border of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari  |  Edge  | IE  |
   * | :----: | :-----: | :-----: | :----: | :-: |
   * | **1**  | **1.5** | **1.2** | **15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-offset
   */
  [OUTLINEOFFSET]: T;
}

export const createOutlineOffset = <
  T = OutlineOffsetProperty,
  Media = never,
  Theme = never
>(
  config: Config<OutlineOffsetProps<T>, Theme> = {},
) =>
  style<OutlineOffsetProps<T>, Theme, Media>({
    cssProp: OUTLINEOFFSET,
    prop: OUTLINEOFFSET,
    ...config,
  });

export const createOutlineOffsetRule = <T = OutlineOffsetProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: OUTLINEOFFSET, getValue: transformer });

export const outlineOffset = createOutlineOffset();

export const outlineOffsetRule = createOutlineOffsetRule();
