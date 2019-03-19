import {isFunction, identity, mapObj} from '@roseys/futils'

import {lookUpTransformNegative} from './utils'
import {isPlainObject} from 'typed-is'
import {getDefault} from './getDefault'
import {getThemePathOr} from './getThemePathOr'

export function getThemeValue(themeKey, transformValue?: any) {
  const isTransformValue = isFunction(transformValue)

  if (!isTransformValue) {
    transformValue = identity
  }

  return (input, defaultValue, mediaKey) => props => {
    const valueKey = input === true ? getDefault(themeKey)(props) : input

    const themeData = getThemePathOr(themeKey)(props)
    const [transform, themeValue] = lookUpTransformNegative(
      valueKey,
      themeData,
      transformValue,
    )

    if (Object(themeValue).hasOwnProperty(mediaKey)) {
      return transform(themeValue[mediaKey])
    }

    if (isTransformValue && isPlainObject(themeValue)) {
      return mapObj(themeValue, (value, key) => ({
        [key]: transform(value),
      }))
    }

    return themeValue == null ? defaultValue : transform(themeValue)
  }
}
