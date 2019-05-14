import { JustifySelfProperty } from '@styleaux/csstype';

import { style, StyleOptions, styler, GetValue } from '@styleaux/core';

const JUSTIFYSELF = 'justifySelf';

export interface JustifySelfProps<T = JustifySelfProperty> {
  /**
   * The CSS **`justify-self`** property set the way a box is justified inside its alignment container along the appropriate axis.
   *
   * **Initial value**: `auto`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **45**  | **10.1** | **16** | No  |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **45**  | **10.1** | **16** | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-self
   */
  [JUSTIFYSELF]: T;
}

export const createJustifySelf = <
  T = JustifySelfProperty,
  Media = never,
  Theme = never
>({
  key,
  transform,
}: Partial<
  Pick<StyleOptions<JustifySelfProps<T>, Theme>, 'key' | 'transform'>
> = {}) =>
  style<JustifySelfProps<T>, Theme, Media>({
    cssProp: JUSTIFYSELF,
    prop: JUSTIFYSELF,
    key,
    transform,
  });

export const createJustifySelfRule = <T = JustifySelfProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: JUSTIFYSELF, getValue: transformer });

export const justifySelf = createJustifySelf();

export const justifySelfRule = createJustifySelfRule();
