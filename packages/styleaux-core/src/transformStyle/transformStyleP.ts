import {ITransformStyle} from './transformStyle'
import {MaybeAnyDict, IDictionary} from '../types'

export type GetThemeP = (
  themeProp: string | Array<string | number>,
) => (props?: MaybeAnyDict) => any

export type transformStylePConfig = {
  value: string | number
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
    return function transformStyleP<T extends IDictionary>(props: T) {
      return transformStyle({
        path,
        postFn,
        getterFn: props ? (v: any, props: T) => getThemeP(v)(props) : undefined,
        props,
        ...rest,
      })
    }
  }
  //const createTransformStyleP = (
}
