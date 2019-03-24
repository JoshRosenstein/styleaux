/**
 * Backgrounds
 */
import {rule} from '@styleaux/core'

import {StringHack,
  BackgroundAttachmentProperty,
  BackgroundClipProperty,
  BackgroundImageProperty,
  BackgroundOriginProperty,
  BackgroundPositionProperty,
  BackgroundRepeatProperty,
  BackgroundSizeProperty,
  BackgroundProperty,
} from '@roseys/csstype'

export const background=rule<BackgroundProperty<StringHack>>('background')
export const backgroundAttachment=rule<BackgroundAttachmentProperty>('backgroundAttachment')
export const backgroundClip=rule<BackgroundClipProperty>('backgroundClip')
export const backgroundImage=rule<BackgroundImageProperty>('backgroundImage')
export const backgroundOrigin=rule<BackgroundOriginProperty>('backgroundOrigin')
export const backgroundPosition=rule<BackgroundPositionProperty<0>>('backgroundPosition')
export const backgroundRepeat=rule<BackgroundRepeatProperty>('backgroundRepeat')
export const backgroundSize=rule<BackgroundSizeProperty<number>>('backgroundSize')
