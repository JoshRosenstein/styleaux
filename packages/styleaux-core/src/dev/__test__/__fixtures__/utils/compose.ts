import {IStyles} from '../../../../responsive/types'
import {merge} from '@roseys/futils'

type InferP<T> = T extends (props: infer R) => any
  ? R extends {theme?: any}
    ? Pick<R, Exclude<keyof R, 'theme'>>
    : R
  : {}

export function compose<T1>(fn0: T1): (props: InferP<T1>) => any
export function compose<T1, T2>(
  fn0: T1,
  fn2: T2,
): (props: InferP<T1> & InferP<T2>) => IStyles | undefined
export function compose<T1, T2>(
  fn0: T1,
  fn2: T2,
): (props: InferP<T1> & InferP<T2>) => IStyles | undefined
export function compose<T1, T2, T3>(
  fn0: T1,
  fn2: T2,
  fn3: T3,
): (props: InferP<T1> & InferP<T2> & InferP<T3>) => IStyles | undefined
export function compose<T1, T2, T3, T4>(
  fn0: T1,
  fn2: T2,
  fn3: T3,
  fn4: T4,
): (
  props: InferP<T1> & InferP<T2> & InferP<T3> & InferP<T4>,
) => IStyles | undefined

export function compose<T1, T2, T3, T4, T5>(
  fn0: T1,
  fn2: T2,
  fn3: T3,
  fn4: T4,
  fn5: T5,
): (
  props: InferP<T1> & InferP<T2> & InferP<T3> & InferP<T4> & InferP<T5>,
) => IStyles | undefined

export function compose<T1, T2, T3, T4, T5, T6>(
  fn0: T1,
  fn2: T2,
  fn3: T3,
  fn4: T4,
  fn5: T5,
  fn6: T6,
): (
  props: InferP<T1> &
    InferP<T2> &
    InferP<T3> &
    InferP<T4> &
    InferP<T5> &
    InferP<T6>,
) => IStyles | undefined

export function compose<T1, T2, T3, T4, T5, T6, T7>(
  fn0: T1,
  fn2: T2,
  fn3: T3,
  fn4: T4,
  fn5: T5,
  fn6: T6,
  fn7: T7,
): (
  props: InferP<T1> &
    InferP<T2> &
    InferP<T3> &
    InferP<T4> &
    InferP<T5> &
    InferP<T6> &
    InferP<T7>,
) => IStyles | undefined

export function compose<T1, T2, T3, T4, T5, T6, T7, T8>(
  fn0: T1,
  fn2: T2,
  fn3: T3,
  fn4: T4,
  fn5: T5,
  fn6: T6,
  fn7: T7,
  fn8: T8,
): (
  props: InferP<T1> &
    InferP<T2> &
    InferP<T3> &
    InferP<T4> &
    InferP<T5> &
    InferP<T6> &
    InferP<T7> &
    InferP<T8>,
) => IStyles | undefined
export function compose<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
  fn0: T1,
  fn2: T2,
  fn3: T3,
  fn4: T4,
  fn5: T5,
  fn6: T6,
  fn7: T7,
  fn8: T8,
  fn9: T9,
): (
  props: InferP<T1> &
    InferP<T2> &
    InferP<T3> &
    InferP<T4> &
    InferP<T5> &
    InferP<T6> &
    InferP<T7> &
    InferP<T8> &
    InferP<T9>,
) => IStyles | undefined

export function compose<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
  fn0: T1,
  fn2: T2,
  fn3: T3,
  fn4: T4,
  fn5: T5,
  fn6: T6,
  fn7: T7,
  fn8: T8,
  fn9: T9,
  fn10: T10,
): (
  props: InferP<T1> &
    InferP<T2> &
    InferP<T3> &
    InferP<T4> &
    InferP<T5> &
    InferP<T6> &
    InferP<T7> &
    InferP<T8> &
    InferP<T9> &
    InferP<T10>,
) => IStyles | undefined

export function compose<S>(...styles) {
  const fn = props =>
    styles.reduce((acc, style) => {
      const output = style(props)

      if (output) {
        return merge(acc, output)
      }

      return acc
    }, {})

  return fn
}
