import {
  ColorProperty,
  OutlineProperty,
  BoxShadowProperty,
  BackgroundPositionProperty,
  BackgroundImageProperty,
  BackgroundSizeProperty,
  BackgroundColorProperty,
} from '@styleaux/csstype'
import {important} from '../important'

export type DebugProps = {
  color: ColorProperty
  backgroundColor: BackgroundColorProperty
  outline: OutlineProperty<string>
}

export type Debug = {
  backgroundPosition: BackgroundPositionProperty
  backgroundImage: BackgroundImageProperty
  backgroundSize: BackgroundSizeProperty
  backgroundColor: BackgroundColorProperty
  '*:not(path):not(g)': DebugProps & {boxShadow: BoxShadowProperty}
}

/**
 * Outlines all elements to debug CSS
 */
export function debug(config?: DebugProps): Debug {
  const {color, backgroundColor, outline} = {
    color: '#66BBFF',
    backgroundColor: 'hsla(210, 100%,50%, 0.5)',
    outline: '0.125rem solid rgba(102,187,255,0.5)',
    ...config,
  }
  return {
    backgroundPosition: 'top left',
    backgroundImage:
      'linear-gradient(0deg, transparent, transparent .9em, rgba(102,187,255,0.25) .9em), linear-gradient(90deg, transparent, transparent .9em, rgba(102,187,255,0.25) .9em)',
    backgroundSize: '1em 1em',
    backgroundColor: '#001424',
    '*:not(path):not(g)': {
      color: important(color),
      backgroundColor: important(backgroundColor),
      outline: important(outline),
      boxShadow: important('none'),
    },
  }
}
