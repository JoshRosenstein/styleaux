import * as CSS from '@styleaux/csstype';
import { arrayWrapper } from '../helpers';
import { isDefined } from 'typed-is';

export interface BackgroundOptions {
  image?: CSS.BackgroundImageProperty;
  position?: CSS.BackgroundPositionProperty;
  size?: CSS.BackgroundSizeProperty;
  repeat?: CSS.BackgroundRepeatProperty;
  origin?: CSS.BackgroundOriginProperty;
  clip?: CSS.BackgroundClipProperty;
  attachment?: CSS.BackgroundAttachmentProperty;
  color?: CSS.BackgroundColorProperty;
}

const backgroundV = (
  ...backgrounds: BackgroundOptions[]
): CSS.BackgroundProperty => {
  return backgrounds
    .map((background) => {
      return Array.of<string | number | undefined>(
        background.image,
        background.position,
        background.size,
        background.repeat,
        background.origin,
        background.clip,
        background.attachment,
        background.color,
      )
        .filter(isDefined)
        .join(' ');
    })
    .filter((s) => s !== '')
    .join(',');
};
const backgroundS = (...backgrounds: BackgroundOptions[]) => ({
  background: backgroundV(...backgrounds),
});

export const background = arrayWrapper(backgroundS);
export const backgroundValue = arrayWrapper(backgroundV);
