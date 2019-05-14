import { px } from '../utils/px';
import {
  createZIndex,
  createTop,
  createBottom,
  createLeft,
  createRight,
} from '@styleaux/styles-base';

export { position } from '@styleaux/styles-base';

export const zIndex = createZIndex({ key: 'zIndices' });
export const top = createTop({ transform: px });
export const right = createRight({ transform: px });
export const bottom = createBottom({ transform: px });
export const left = createLeft({ transform: px });
