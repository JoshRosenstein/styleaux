import { Config } from '../../types';
import { TransformBoxProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const TRANSFORMBOX = 'transformBox';

export interface TransformBoxProps<T = TransformBoxProperty> {
  /**
   * The **`transform-box`** CSS property defines the layout box to which the `transform` and `transform-origin` properties relate.
   *
   * **Initial value**: `border-box `
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **64** | **55**  |  n/a   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-box
   */
  [TRANSFORMBOX]: T;
}

export const createTransformBox = <
  T = TransformBoxProperty,
  Media = never,
  Theme = never
>(
  config: Config<TransformBoxProps<T>, Theme> = {},
) =>
  style<TransformBoxProps<T>, Theme, Media>({
    cssProp: TRANSFORMBOX,
    prop: TRANSFORMBOX,
    ...config,
  });

export const createTransformBoxRule = <T = TransformBoxProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: TRANSFORMBOX, getValue: transformer });

export const transformBox = createTransformBox();

export const transformBoxRule = createTransformBoxRule();
