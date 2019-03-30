import { isNumber} from 'typed-is'
import { identity} from '@roseys/futils'
import {DEFAULT_MEDIA_KEY} from '@styleaux/core'
import {px} from '@styleaux/tools'
import {SPACE_KEY} from '../constants'

import {getThemePathOr} from '@styleaux/core/dist-src/getters/getThemePathOr'

import {transformNegatives} from '@styleaux/core'

type AnyFunc = (...args: any[]) => any

export type CreateSpaceValueArg={
  transformValue?: AnyFunc
  themeKey?: string
  scale?: number[] | string[]
  getter?: AnyFunc
}

export function createSpaceValue({
  transformValue = identity,
  themeKey = SPACE_KEY,
  scale = [0, 4, 8, 16, 32, 64, 128, 256, 512],
  getter = getThemePathOr(themeKey, scale),
}: CreateSpaceValueArg) {
  return (defaultValue?: string | number | AnyFunc) => (
    input,
    props,
    mediaKey,
  ) => {
    const spaces = getter(props)
    /// This allows individual scalls within theme.space for each media
    return transformNegatives(input, spaces[mediaKey] || spaces[DEFAULT_MEDIA_KEY] || spaces, transformValue) || defaultValue
  }
}

export const spaceValue = createSpaceValue({
  transformValue: (n: any) => (isNumber(n) && n !== 0 ? px(n) : n),
})
