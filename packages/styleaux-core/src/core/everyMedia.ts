import {identity} from '@roseys/futils'
import {isPlainObject} from 'typed-is'
import {getThemeMedia} from '../getters'
import {createWarnOnce} from '../utils/warn-once'
import {ObjectInterpolation3} from '../cssTypes2'
const warnOnce = createWarnOnce('everyMedia')

const has = (a: string[], b: string[]) => b.some(key => a.includes(key))
//const identity = <T>(v: T) => v;

export function everyMedia<P, V extends number | string | Record<string, any>>(
  props: P,
  value: V ,
  wrapper: (input: V) => any = identity,
): ObjectInterpolation3  {
  const media = getThemeMedia(props)

  if (isPlainObject(value)) {
    const mediaKeys = Object.keys(media)
    const valueKeys = Object.keys(value)
    if (has(mediaKeys, valueKeys)) {
      return valueKeys.reduce((acc, key) => {
        if (mediaKeys.includes(key)) {
          const q = media[key]
          const v = wrapper(value[key])
          if (!v) {
            return acc
          }
          if (q) {
            acc[`@media ${q}`] = wrapper(value[key])
            return acc
          } else {
            return Object.assign(acc, wrapper(value[key]))
          }
        }
        warnOnce(`Could not Find media for key %s`, key)
        return acc
      }, {})
    }
  }
  return wrapper(value as V)
}
