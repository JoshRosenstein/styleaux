import {createFlexBasis} from '@styleaux/styles-base'
import {getWidth} from '../values/width-value'

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
} from '@styleaux/styles-base'

export const flexBasis = createFlexBasis({transformValue:getWidth})
