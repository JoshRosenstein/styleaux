import {rule} from '@styleaux/core'

import {
  FlexBasisProperty,
  FlexDirectionProperty,
  FlexFlowProperty,
  FlexProperty,
  FlexWrapProperty,
  GlobalsNumber,
  ColumnGapProperty,
  GapProperty,
  RowGapProperty,
} from '@roseys/csstype'

//https://developer.mozilla.org/en-US/docs/Glossary/Flex_Container

/// Container
const flexFlow = rule<FlexFlowProperty>('flexFlow')
const flexDirection = rule<FlexDirectionProperty>('flexDirection')
const flexWrap = rule<FlexWrapProperty>('flexWrap')
const gap = rule<GapProperty<number>>('gap')
const columnGap = rule<ColumnGapProperty<number>>('columnGap')
const rowGap = rule<RowGapProperty<number>>('rowGap')
/// Items
//https://developer.mozilla.org/en-US/docs/Glossary/Flex_Item
const order = rule<number>('order')
const flex = rule<FlexProperty<number>>('flex')
const flexBasis = rule<FlexBasisProperty<number>>('flexBasis')
const flexGrow = rule<GlobalsNumber>('flexGrow')
const flexShrink = rule<GlobalsNumber>('flexShrink')

export {
  flexFlow,
  flexDirection,
  flexWrap,
  columnGap,
  rowGap,
  gap,
  order,
  flex,
  flexBasis,
  flexGrow,
  flexShrink,
}
