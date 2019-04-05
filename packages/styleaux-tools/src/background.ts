import {
BackgroundProperty,
  BackgroundImageProperty,
  BackgroundPositionProperty,
  BackgroundSizeProperty,
  BackgroundRepeatProperty,
  BackgroundOriginProperty,
  BackgroundClipProperty,
  BackgroundAttachmentProperty,

  BackgroundColorProperty,

} from '@styleaux/csstype'
import {arrayWrapper} from './arrayWrapper'
import {isDefined} from 'typed-is'

export type BackgroundOptions = {
  image?: BackgroundImageProperty
  position?: BackgroundPositionProperty
  size?: BackgroundSizeProperty
  repeat?: BackgroundRepeatProperty
  origin?: BackgroundOriginProperty
  clip?: BackgroundClipProperty
  attachment?: BackgroundAttachmentProperty
  color?: BackgroundColorProperty
}




export const background= arrayWrapper(function backgroundInner(...backgrounds:BackgroundOptions[]): BackgroundProperty {
    return backgrounds.map((background) => {
        return [
            background.image,
            background.position,
            background.size,
            background.repeat,
            background.origin,
            background.clip,
            background.attachment,
            background.color
        ]
            .filter(isDefined)
            .join(' ');
    })
        .filter(s=>s!=='')
        .join(',');
})

