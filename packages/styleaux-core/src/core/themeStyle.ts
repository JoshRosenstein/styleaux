import {toArray} from '@roseys/futils'
import {getThemeValue} from '../getters'
import {everyMedia} from './everyMedia'

export type ThemeStyleConfig = {
  themeKey: string
  transformValue?: (...args: any[]) => any
  themeGetter?: (...args: any[]) => any
}

export function themeStyle<T>({
  themeKey,
  transformValue,
  themeGetter = getThemeValue(themeKey, transformValue),
}: ThemeStyleConfig) {
  return (inputs: T[] | T, props, mediaKey) =>
    toArray(inputs).reduce(
      (acc, input) => ({
        ...acc,
        ...everyMedia(props, themeGetter(input, null, mediaKey)(props)),
      }),
      {},
    )
}
