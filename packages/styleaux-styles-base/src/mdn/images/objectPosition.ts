import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { ObjectPositionProperty } from '@styleaux/csstype';

const OBJECTPOSITION = 'objectPosition';

export interface ObjectPositionProps<T = ObjectPositionProperty> {
  /**
   * The **`object-position`** CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.
   *
   * **Initial value**: `50% 50%`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **31** | **36**  | **10** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/object-position
   */
  [OBJECTPOSITION]: T;
}

export const createObjectPosition = <
  T = ObjectPositionProperty,
  Media = never,
  Theme = never
>(
  config: Config<ObjectPositionProps<T>, Theme> = {},
) =>
  style<ObjectPositionProps<T>, Theme, Media>({
    cssProp: OBJECTPOSITION,
    prop: OBJECTPOSITION,
    ...config,
  });

export const createObjectPositionRule = <
  T = ObjectPositionProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: OBJECTPOSITION, getValue: transformer });

export const objectPosition = createObjectPosition();

export const objectPositionRule = createObjectPositionRule();
