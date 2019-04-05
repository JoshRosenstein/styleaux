import {createStyles} from './createStyles'
import {styler} from './styler'
import {getThemePathOr, safeGet} from '../getters'
import {CSSPropertiesKeys} from '../cssTypes'
import {StringHack} from '@styleaux/csstype'
import {identity} from '@roseys/futils'

export interface GetStyleOptions {
  key?: string
  transformValue?: Function
  scale?: number[] | string[] | string | number[]
}

export interface StyleOptions extends GetStyleOptions {
  prop: CSSPropertiesKeys | StringHack
  cssProp?: CSSPropertiesKeys
  alias?: string
}

export function getStyle<T=any>({
  key,
  transformValue = identity,
  scale,
}: GetStyleOptions) {
  return (input:T, props) =>
    key || scale
      ? transformValue(safeGet(input, scale)(getThemePathOr(key, scale)(props)))
      : transformValue(input)
}

export function style<
  P extends {},
  M extends {} = never,
  T extends {} = never
>({prop, cssProp, key, transformValue = identity, alias, scale}: StyleOptions) {
  const property = cssProp || (prop as CSSPropertiesKeys)

  //const getValue=(input, props, mediaKey) => key?getThemeValue(key, transformValue)(input, input, mediaKey)(props):transformValue(input)

  const getter = styler<any>({
    cssProp: property,
    getValue: getStyle({key, transformValue, scale}),
  })

  const config = {[prop]: getter} as P
  if (alias) {
    config[alias] = getter
  }

  return createStyles<P, M, T>(config)
}
