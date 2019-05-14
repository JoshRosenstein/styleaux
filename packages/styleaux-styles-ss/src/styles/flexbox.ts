import { getWidth } from '../values/width-value';
import { createFlexBasis } from '@styleaux/styles-base';

export {
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  justifySelf,
  alignSelf,
  order,
} from '@styleaux/styles-base';

export const flexBasis = createFlexBasis({ transform: getWidth });
