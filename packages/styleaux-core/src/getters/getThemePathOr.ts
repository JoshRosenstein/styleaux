import {pathOr} from '@roseys/futils'

import getTheme from './getTheme'

/**
 * Get value from theme. With optional fallback value
 *
 *@related getTheme
 *
 * @param input Target prop within theme, string, array, or string dot syntax
 * @param defaultValue Fallback Value
 */

export const getThemePathOr = (input, defaultValue?: any) => props =>
  pathOr(defaultValue, input)(getTheme(props))

export default getThemePathOr
