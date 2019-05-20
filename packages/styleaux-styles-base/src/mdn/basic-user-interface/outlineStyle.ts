import { Config } from '../../types';
import { OutlineStyleProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const OUTLINESTYLE = 'outlineStyle';

export interface OutlineStyleProps<T = OutlineStyleProperty> {
  /**
   * The **`outline-style`** CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-style
   */
  [OUTLINESTYLE]: T;
}

export const createOutlineStyle = <
  T = OutlineStyleProperty,
  Media = never,
  Theme = never
>(
  config: Config<OutlineStyleProps<T>, Theme> = {},
) =>
  style<OutlineStyleProps<T>, Theme, Media>({
    cssProp: OUTLINESTYLE,
    prop: OUTLINESTYLE,
    ...config,
  });

export const createOutlineStyleRule = <T = OutlineStyleProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: OUTLINESTYLE, getValue: transformer });

export const outlineStyle = createOutlineStyle();

export const outlineStyleRule = createOutlineStyleRule();
