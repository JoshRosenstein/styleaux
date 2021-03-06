import { Config } from '../../types';
import { BorderLeftProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const BORDERLEFT = 'borderLeft';

export interface BorderLeftProps<T = BorderLeftProperty> {
  /**
   * The **`border-left`** CSS property is a shorthand that sets the values of `border-left-width`, `border-left-style` and `border-left-color`. These properties set an element's left border.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left
   */
  [BORDERLEFT]: T;
}

export const createBorderLeft = <
  T = BorderLeftProperty,
  Media = never,
  Theme = never
>(
  config: Config<BorderLeftProps<T>, Theme> = {},
) =>
  style<BorderLeftProps<T>, Theme, Media>({
    cssProp: BORDERLEFT,
    prop: BORDERLEFT,
    ...config,
  });

export const createBorderLeftRule = <T = BorderLeftProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BORDERLEFT, getValue: transformer });

export const borderLeft = createBorderLeft();

export const borderLeftRule = createBorderLeftRule();
