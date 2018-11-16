import {TransformStyle} from './transformStyle'
import {MaybeAnyDict, Maybe} from '@styleaux/helper-plugin-utils'

type GetThemeP = (
  themeProp: string | Array<string | number>,
) => (props?: MaybeAnyDict) => any

type transformFuncs = {
  (value: string, props?: MaybeAnyDict): Maybe<string>
  (value: number, props?: MaybeAnyDict): Maybe<number>
  (value: string | number, props?: MaybeAnyDict): Maybe<string | number>
}

type StringDic = {[index: string]: any}

type transformStylePConfig = {
  value: Maybe<string | number>
  cssProp?: string
  valueOnly?: boolean
  key?: string /// OLD
  path?: string
  getter?: transformFuncs /// OLD
  postFn?: transformFuncs
  preFn?: transformFuncs

  [index: string]: any
}

export const createTransformStyleP = (
  transformStyle: TransformStyle,
  getThemeP: GetThemeP,
) => {
  return function transformStyleProp({
    postFn,
    getter,
    key,
    path,
    ...rest
  }: transformStylePConfig) {
    return function transformStyleP(props: MaybeAnyDict) {
      return transformStyle({
        path: key || path,
        postFn: getter || postFn,
        lookUpfn: props ? (v, props) => getThemeP(v)(props) : undefined,
        props,
        ...rest,
      })
    }
  }
  //const createTransformStyleP = (
}
