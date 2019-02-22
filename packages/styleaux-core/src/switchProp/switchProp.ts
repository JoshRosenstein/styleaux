// @flow

import {
  keys,
  pick,
  defaultTo,
  flow,
  when,
  filter,
  path,
  pathOr,
  isEmpty,
} from '@roseys/futils'

import {
  whenFunctionCallWith,
  firstNonNil,
  falseToNull,
  iterateUntilResult,
  isResponsiveType,
  pipeIfDefined,
} from '../utils'
import {isTruthy, isDefined, isString, isNil} from 'typed-is'
import {IDictionary} from '../types'
//const identity = (x: any) => x

// type IOptions<T extends {[key: string]: any}> = {
//   transform: boolean
//   responsive: boolean
//   responsiveBool: boolean
//   transformConfig: T
// }

type IMaybeFunc = Function | undefined | null

// type IValue = {
//   [key: string]:
//     | string
//     | number
//     | ((...args: any[]) => string | number | undefined)
//     | IDictionary
//   options?: {
//     transform?: boolean
//     responsive?: boolean
//     responsiveBool?: boolean
//   } & IDictionary
//   default?: any
// }
export const createSwitchProp = <
  RP extends IMaybeFunc,
  RBP extends Function,
  TS extends Function,
  MF extends {[key: string]: Function}
>(
  responsiveProp?: Function,
  responsiveBoolProp?: IMaybeFunc,
  transformStyle?: IMaybeFunc,
  mappedFunctions?: MF,
  globalTransformConfig: {[key: string]: any} = {},
  globalTransform: boolean = false,
  globalResponsive: boolean = false,
  globalResponsiveBool: boolean = false,
) => {
  return function switchProp(
    value: any,
    {
      valueOnly,
      cssProp,
      // transform: localTransform,
      responsive: localResponsive,
      responsiveBool: localResponsiveBool,
      transformConfig,
      ...localTransformOpt
    }: {
      //[index: string]: any
      valueOnly?: boolean
      cssProp: string
      transformConfig?: {
        [key: string]: any
        transform?: boolean
      }

      responsive?: boolean
      responsiveBool?: boolean
    }, /// can overide global options with factory Options
  ) {
    return function switch_(props: IDictionary) {
      /// can overide localOption with optionsKey
      const {default: defaultValue, options: opt = {}, ...matchers} = value
      const {
        transform: parserTransform,
        responsive: parserResponsive,
        responsiveBool: parserResponsiveBool,
        ...parserTransformOpt
      } = opt

      const transformOptions = {
        ...globalTransformConfig,
        ...transformConfig,
        ...parserTransformOpt,
      }

      const transform = firstNonNil([
        parserTransform,
        transformConfig,
        globalTransform,
      ])

      const responsive = firstNonNil([
        parserResponsive,
        localResponsive,
        globalResponsive,
      ])

      const responsiveBool = firstNonNil([
        parserResponsiveBool,
        localResponsiveBool,
        globalResponsiveBool,
      ])

      /// Transform
      let transformer = (v: any) => v
      let hasBeenTransformed = false
      if (
        transform !== false &&
        transformStyle &&
        (transform ||
          isDefined(localTransformOpt) ||
          isDefined(parserTransformOpt))
      ) {
        transformer = v =>
          pipeIfDefined(
            whenFunctionCallWith(
              {
                value: v,
                cssProp,
                valueOnly: true,
                ...transformOptions,
              },
              props,
            ),
            whenFunctionCallWith(props),
          )(transformStyle)
      }
      // /Isuue with Pick when value is 0, fix FUTILS
      const intersectedMatchers = keys(
        pick(keys(matchers), filter(isTruthy, props)),
      )
      let matchedPropName
      // let matchedPropValue

      let computedValue
      if (isEmpty(intersectedMatchers) && isNil(defaultValue)) {
        return valueOnly ? computedValue : cssProp ? {} : computedValue
        //  return cssProp ? { [cssProp]: computedValue } : computedValue
      }

      if (isEmpty(intersectedMatchers) && !isNil(defaultValue)) {
        computedValue = transformer(whenFunctionCallWith(props)(defaultValue))
        hasBeenTransformed = true
      }
      // / NEW BUGGG NOT REMOVING FALSE PROPS

      if (!isEmpty(intersectedMatchers)) {
        computedValue = flow(
          intersectedMatchers,
          iterateUntilResult((_, propName: string) => {
            matchedPropName = propName

            return pipeIfDefined(
              when(isString, x => pathOr(x, x, mappedFunctions)),
              whenFunctionCallWith(props[propName], props),
              whenFunctionCallWith(props),
            )(path(propName, matchers) as any)
          }),
          falseToNull,
          defaultTo(whenFunctionCallWith(props)(defaultValue)),
        )
      }

      if (isNil(computedValue)) {
        return computedValue
      }

      if (
        isResponsiveType(computedValue) ||
        (matchedPropName && isResponsiveType(path(matchedPropName, props)))
      ) {
        if (responsiveBool && responsiveBoolProp) {
          // console.log({computedValue})

          return responsiveBoolProp({
            value: computedValue,
            cssProp,
            prop: matchedPropName,
            transform,
            ...transformOptions,
          })(props)
        }
        if (responsive && responsiveProp) {
          return responsiveProp({
            value: computedValue,
            cssProp,
            prop: matchedPropName,
            transform,
            ...transformOptions,
          })(props)
        }
      }
      computedValue = hasBeenTransformed
        ? computedValue
        : transformer(computedValue)

      return valueOnly
        ? computedValue
        : cssProp
        ? {[cssProp]: computedValue}
        : computedValue
    }
  }
}

export default createSwitchProp
