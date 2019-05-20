import { path } from '@roseys/futils';
import { getThemeMedia } from './getThemeMedia';

export const getMedia = (
  input: string,
  media?: Record<string, any>,
): string | number | null | undefined =>
  media
    ? path<any>(input, media)
    : (props) => path<any>(input, getThemeMedia(props));
