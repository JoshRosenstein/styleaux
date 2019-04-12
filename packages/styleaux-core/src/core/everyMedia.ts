import { identity } from '@roseys/futils'
import { isPlainObject } from 'typed-is'
import { getThemeMedia } from '../getters'
import { createWarnOnce, ensureMQ } from '../utils'
import { Styles, CSSObj } from '../cssTypes'
const warnOnce = createWarnOnce('everyMedia')

const has = (a: string[], b: string[]) => b.some(key => a.includes(key))
//const identity = <T>(v: T) => v;

/**
 * Checks is value is of responsive type and wraps in media query if so.
 * @remarks
 * TODO
 *
 * @param props
 * @param value - maybe responsive value
 * @param [wrapper=identity]  - transformer
 *
 * @example
 *
*/
export function everyMedia<P, V extends NonNullable<Styles>>(
  props: P,
  value: V,
  wrapper: (input: V) => Styles = identity as (i: V) => Styles,
): CSSObj {
  const media = getThemeMedia(props)

  if (isPlainObject(value) && media) {

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
            acc[ensureMQ(q)] = v
            return acc
          } else {
            /// handles is wrapper is a custom responsive generator
            return Object.assign(acc, v)
          }
        }
        warnOnce(`Could not Find media for key %s`, key)
        return acc
      }, {})
    }
  }
  return wrapper(value) as CSSObj
}
