import {createStyles} from '@styleaux/core'
import {
  alignContentRule,
  alignItemsRule,
  justifyContentRule,
  justifyItemsRule,
  justifySelfRule,
  placeContentRule,
  placeItemsRule,
} from '../rules/boxAlignment'

import {
  flexFlowRule,
  flexDirectionRule,
  flexWrapRule,
  orderRule,
  columnGapRule,
  gapRule,
  rowGapRule,
} from '../rules/flex'

export const flex = createStyles({
  alignContent:alignContentRule,
  alignItems:alignItemsRule,
  justifyContent:justifyContentRule,
  justifyItems:justifyItemsRule,
  justifySelf:justifySelfRule,
  placeContent:placeContentRule,
  placeItems:placeItemsRule,
  columnGap:columnGapRule,
  gap:gapRule,
  rowGap:rowGapRule,
  flexFlow:flexFlowRule,
  flexDirection:flexDirectionRule,
  flexWrap:flexWrapRule,
  order:orderRule
})
