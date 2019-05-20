import { Config } from '../../types';
import { ObjectFitProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const OBJECTFIT = 'objectFit';

export interface ObjectFitProps<T = ObjectFitProperty> {
  /**
   * The **`object-fit`** CSS property sets how the content of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.
   *
   * **Initial value**: `fill`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **31** | **36**  | **10** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/object-fit
   */
  [OBJECTFIT]: T;
}

export const createObjectFit = <
  T = ObjectFitProperty,
  Media = never,
  Theme = never
>(
  config: Config<ObjectFitProps<T>, Theme> = {},
) =>
  style<ObjectFitProps<T>, Theme, Media>({
    cssProp: OBJECTFIT,
    prop: OBJECTFIT,
    ...config,
  });

export const createObjectFitRule = <T = ObjectFitProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: OBJECTFIT, getValue: transformer });

export const objectFit = createObjectFit();

export const objectFitRule = createObjectFitRule();
