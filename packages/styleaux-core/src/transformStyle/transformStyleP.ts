import {ITransformStyle, ITransformFns} from './transformStyle'
import {MaybeAnyDict, Maybe} from '../types'

export type GetThemeP = (
  themeProp: string | Array<string | number>,
) => (props?: MaybeAnyDict) => any

type transformFuncs = {
  (value: string, props?: MaybeAnyDict): Maybe<string>
  (value: number, props?: MaybeAnyDict): Maybe<number>
  (value: string | number, props?: MaybeAnyDict): Maybe<string | number>
}

type StringDic = {[index: string]: any}

export type transformStylePConfig = {
  value: Maybe<string | number>
  cssProp?: string
  valueOnly?: boolean
  //key?: string /// OLD
  path?: string
  //getter?: transformFuncs /// OLD
  postFn?: any
  preFn?: any
}

export const createTransformStyleP = (
  transformStyle: ITransformStyle,
  getThemeP: GetThemeP,
) => {
  return function transformStyleProp({
    postFn,
    preFn,
    //getter,
    // key,
    path,
    ...rest
  }: transformStylePConfig) {
    return function transformStyleP<T extends {}>(props: T) {
      return transformStyle({
        path,
        postFn,
        lookUpfn: props ? (v, props) => getThemeP(v)(props) : undefined,
        props,
        ...rest,
      })
    }
  }
  //const createTransformStyleP = (
}
