import {getDefault} from './getDefault'
import {MEDIA_KEY, DEFAULT_MEDIA_KEY} from '../constants'

/**
 * Gets props.theme[DEFAULT_KEY][MEDIA_KEY]
 *@link getDefault
 *@param props
 */

export const getDefaultMedia = props =>
  getDefault(MEDIA_KEY, DEFAULT_MEDIA_KEY)(props) as typeof DEFAULT_MEDIA_KEY

//const t = getDefaultMedia({theme: {default: {media: DEFAULT_MEDIA_KEY}}})

//const t=getDefault('as')({default:{as:2}})
