import {createStyles} from '@styleaux/core'
import {
  alignContent,
  alignItems,
  justifyContent,
  justifyItems,
  justifySelf,
  placeContent,
  placeItems,
} from '../rules/boxAlignment'

import {
  flexFlow,
  flexDirection,
  flexWrap,
  order,
  columnGap,
  gap,
  rowGap,
} from '../rules/flex'

export const flex = createStyles({
  alignContent,
  alignItems,
  justifyContent,
  justifyItems,
  justifySelf,
  placeContent,
  placeItems,
  columnGap,
  gap,
  rowGap,
  flexFlow,
  flexDirection,
  flexWrap,
  order,
})
