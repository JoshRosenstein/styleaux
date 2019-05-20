import { getDefaultKey } from './getDefaultKey';
import { MEDIA_KEY, DEFAULT_MEDIA_KEY } from '../constants';

/**
 * Gets props.theme[DEFAULT_KEY][MEDIA_KEY]
 *@link getDefaultKey
 *@param props
 */

export const getDefaultMediaKey = (props: Record<string, any>): string =>
  getDefaultKey(MEDIA_KEY, DEFAULT_MEDIA_KEY)(props);
