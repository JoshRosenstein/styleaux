import { getDefaultKey } from './getDefaultKey';
import { MEDIA_KEY, DEFAULT_MEDIA_KEY, IConstants } from '../constants';

/**
 * Gets props.theme[DEFAULT_KEY][MEDIA_KEY]
 *@link getDefaultKey
 *@param props
 */

export const getDefaultMediaKey = (props: any): IConstants['MEDIA_KEY'] =>
  getDefaultKey(MEDIA_KEY, DEFAULT_MEDIA_KEY)(props);
