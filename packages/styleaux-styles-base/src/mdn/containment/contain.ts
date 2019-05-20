import { Config } from '../../types';
import { ContainProperty } from '@styleaux/csstype';
import { style, styler, GetValue } from '@styleaux/core';

const CONTAIN = 'contain';

export interface ContainProps<T = ContainProperty> {
  /**
   * The **`contain`** CSS property allows an author to indicate that an element and its contents are, as much as possible, _independent_ of the rest of the document tree. This allows the browser to recalculate layout, style, paint, size, or any combination of them for a limited area of the DOM and not the entire page.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **52** |   n/a   |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/contain
   */
  [CONTAIN]: T;
}

export const createContain = <
  T = ContainProperty,
  Media = never,
  Theme = never
>(
  config: Config<ContainProps<T>, Theme> = {},
) =>
  style<ContainProps<T>, Theme, Media>({
    cssProp: CONTAIN,
    prop: CONTAIN,
    ...config,
  });

export const createContainRule = <T = ContainProperty, P = unknown>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: CONTAIN, getValue: transformer });

export const contain = createContain();

export const containRule = createContainRule();
