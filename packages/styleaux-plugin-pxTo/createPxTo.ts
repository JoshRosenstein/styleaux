//import {pxToT} from './types'
import {IDKEY, ISSTANDALONEKEY} from '@styleaux/helper-plugin-utils/constants'
import {ASSISTANTID} from './constants'
import pxTo from './pxTo'
import {pxToT} from './types'
const BASEFONTSIZE = 'baseFontSize'

type $Keys<T extends object> = keyof T

export type o = 'baseFontSize' | 'optionalNumber'

export const O: UnionKeyToValue1<o> = {
  baseFontSize: 'baseFontSize',
  optionalNumber: 'optionalNumber',
}
const B = O.baseFontSize
type kind = 'primary' | 'secondary' | 'tertiary' | 'minimal'

type UnionKeyToValue1<U extends string> = {[K in U]: K}
type UnionKeyToValue2<U extends string, T> = {[K in U]: T}

type Dic<T> = Record<string, T>

type U2<K extends string, T> = Merge<UnionKeyToValue2<K, T>, Dic<T>>

type KnownStat =
  | 'attack'
  | 'health'
  | 'healthFull'
  | 'durability'
  | 'armor'
  | 'cost'
  | 'owner'

type Stats = U2<KnownStat, number>
type Stats2 = U2<KnownStat, ((a: number) => number) | number>
type MapKeys<T> = {[K in keyof T]: T[K]}
type Merge<A, B> = MapKeys<(A) & (B)>

export type Options = {
  [index: string]: any
  baseFontSize?: number
}
export const defaultOptions = {
  [BASEFONTSIZE]: 16,
}

export const optionKeys = Object.keys(defaultOptions)

export type OptionsKeys = keyof Options

// type CreatePxTo = ((dependents: CreatePxToDeps) => pxToT) &
//   ({
//     [IDKEY]: typeof ASSISTANTID
//     [ISSTANDALONEKEY]: true
//   })

const createPxTo = (options: Partial<Options> = defaultOptions) => {
  return pxTo(options[BASEFONTSIZE] | 16)
}

// const createPxTo = ({baseFontSize}) => pxTo(baseFontSize)
// createPxTo[IDKEY] = ASSISTANTID
// createPxTo[ISSTANDALONEKEY] = true
export default createPxTo
