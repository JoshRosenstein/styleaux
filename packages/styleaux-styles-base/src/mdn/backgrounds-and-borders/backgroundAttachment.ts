import { Config } from '../../types';
import { style, styler, GetValue } from '@styleaux/core';
import { BackgroundAttachmentProperty } from '@styleaux/csstype';

const BACKGROUNDATTACHMENT = 'backgroundAttachment';

export interface BackgroundAttachmentProps<T = BackgroundAttachmentProperty> {
  /**
   * The **`background-attachment`** CSS property sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.
   *
   * **Initial value**: `scroll`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-attachment
   */
  [BACKGROUNDATTACHMENT]: T;
}

export const createBackgroundAttachment = <
  T = BackgroundAttachmentProperty,
  Media = never,
  Theme = never
>(
  config: Config<BackgroundAttachmentProps<T>, Theme> = {},
) =>
  style<BackgroundAttachmentProps<T>, Theme, Media>({
    cssProp: BACKGROUNDATTACHMENT,
    prop: BACKGROUNDATTACHMENT,
    ...config,
  });

export const createBackgroundAttachmentRule = <
  T = BackgroundAttachmentProperty,
  P = unknown
>(
  transformer?: GetValue<T, P>,
) => styler<T, P>({ cssProp: BACKGROUNDATTACHMENT, getValue: transformer });

export const backgroundAttachment = createBackgroundAttachment();

export const backgroundAttachmentRule = createBackgroundAttachmentRule();
