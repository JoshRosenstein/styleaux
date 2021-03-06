import { isString } from 'typed-is';
import { px } from '@styleaux/tools';
import { WIDTH_KEY } from '../constants';
import { AnyFunc } from '@styleaux/types';
import { themeValue } from './theme-value';

export const getWidth = (n: string | number) =>
  isString(n) ? n : n > 1 ? px(n) : n * 100 + '%';

export const createwidthValue = ({
  themeKey = WIDTH_KEY,
  transform = getWidth,
}: { themeKey?: string; transform?: AnyFunc } = {}) =>
  themeValue({ themeKey, transform });

export const widthValue = createwidthValue();
