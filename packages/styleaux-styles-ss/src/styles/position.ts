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
export const top = createTop({ transformValue: px });
export const right = createRight({ transformValue: px });
export const bottom = createBottom({ transformValue: px });
export const left = createLeft({ transformValue: px });
