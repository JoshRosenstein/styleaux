import { getDefault } from './getDefault';
import { MEDIA_KEY, DEFAULT_MEDIA_KEY, IConstants } from '../constants';

/**
 * Gets props.theme[DEFAULT_KEY][MEDIA_KEY]
 *@link getDefault
 *@param props
 */

export const getDefaultMedia = (props: any): IConstants['MEDIA_KEY'] =>
  getDefault(MEDIA_KEY, DEFAULT_MEDIA_KEY)(props);
