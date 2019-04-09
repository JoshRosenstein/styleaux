import {createStyles2} from './createStyles2'
import {styler} from './styler'
import {getThemePathOr, safeGet} from '../getters'
import * as CSS from '@styleaux/csstype'
import {identity} from '@roseys/futils'
import {PropStyleFuncArr} from './types'
export interface GetStyleOptions<T, K = Extract<keyof T, string>> {
  key?: K
  transformValue?: Function
  scale?: number[] | string[] | string | number[]
}

export interface StyleOptions<
  P extends {} = any,
  T = any,
  Prop = Extract<keyof P, string> | keyof CSS.Properties
> extends GetStyleOptions<T> {
  prop: Prop
  cssProp?: keyof CSS.Properties
  alias?: Extract<keyof P, string>
}

type ExtractFB<T, U, FB = never> = T extends U ? T : FB

export interface GetStyleOptions2<T extends Record<string, any>> {
  key?: ExtractFB<keyof T, string, string>
  transformValue?: Function
  scale?: number[] | string[] | string | number[]
}

export interface StyleOptions2<
  P extends {},
  T,
  K = Extract<keyof P, string>,
  CSSP extends K | keyof CSS.Properties = K extends keyof CSS.Properties? K: keyof CSS.Properties
> extends GetStyleOptions2<T> {
  prop: K
  cssProp?: CSSP
  alias?: K
}

export function getStyle<Theme, P extends {} = any>({
  key,
  transformValue = identity,
  scale,
}: GetStyleOptions2<Theme>) {
  return (input: unknown, props: P) =>
    key || scale
      ? transformValue(safeGet(input, scale)(getThemePathOr(key, scale)(props)))
      : transformValue(input)
}

export function style<
  P extends Record<string, any>,
  Theme extends {} = any,
  K extends keyof P = keyof P
>({
  prop,
  cssProp,
  key,
  transformValue = identity,
  alias,
  scale,
}: StyleOptions2<P, Theme>): PropStyleFuncArr<P> {
  const property = cssProp || prop

  //const getValue=(input, props, mediaKey) => key?getThemeValue(key, transformValue)(input, input, mediaKey)(props):transformValue(input)

  const getter = styler<P[K], P>({
    cssProp: property,
    getValue: getStyle({key, transformValue, scale}),
  })

  const config = {[prop]: getter} as any
  if (alias) {
    config[alias] = getter
  }

  return createStyles2<P>(config)
}
