import { toArray } from '@roseys/futils'
import { getThemeValue } from '../getters'
import { everyMedia } from './everyMedia'
import { Styles } from '../cssTypes';
import { isPlainObject } from 'typed-is'
export type ThemeStyleConfig = {
  themeKey: string
  transformValue?: (...args: any[]) => any
  themeGetter?: (...args: any[]) => any
}

const ensureObject = (input: unknown) => {
  return isPlainObject(input) ? input : {}
}

export function themeStyle<T, P>({
  themeKey,
  transformValue,
  themeGetter = getThemeValue(themeKey, transformValue),
}: ThemeStyleConfig) {

  return function themeStyleInner(inputs: T, props: P, mediaKey) {

    return toArray(inputs).reduce(
      (acc, input) => ({
        ...acc,
        ...ensureObject(everyMedia(props, themeGetter(input, null, mediaKey)(props))),
      }),
      {} as Styles,
    )
  }
}
