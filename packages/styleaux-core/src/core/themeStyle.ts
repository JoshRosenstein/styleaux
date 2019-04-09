import {toArray} from '@roseys/futils'
import {getThemeValue} from '../getters'
import {everyMedia} from './everyMedia'
import { ObjectInterpolation3 } from '../cssTypes2';
export type ThemeStyleConfig = {
  themeKey: string
  transformValue?: (...args: any[]) => any
  themeGetter?: (...args: any[]) => any
}

export function themeStyle<T,P>({
  themeKey,
  transformValue,
  themeGetter = getThemeValue(themeKey, transformValue),
}: ThemeStyleConfig) {

  return function themeStyleInner(inputs: T, props:P, mediaKey){

   return  toArray(inputs).reduce(
      (acc, input) => ({
        ...acc,
        ...everyMedia(props, themeGetter(input, null, mediaKey)(props)),
      }),
      {} as ObjectInterpolation3,
    )}
}
