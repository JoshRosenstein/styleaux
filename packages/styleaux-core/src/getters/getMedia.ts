import { path } from '@roseys/futils';
import { Dictionary } from '../types';
import { getThemeMedia } from './getThemeMedia';

export const getMedia = (
  input: string,
  media?: Dictionary,
): string | number | null | undefined =>
  media
    ? path<any>(input, media)
    : (props) => path<any>(input, getThemeMedia(props));
