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
export const flexFlowRule= rule<FlexFlowProperty>('flexFlow')
export const flexDirectionRule= rule<FlexDirectionProperty>('flexDirection')
export const flexWrapRule= rule<FlexWrapProperty>('flexWrap')
export const gapRule= rule<GapProperty<number>>('gap')
export const columnGapRule= rule<ColumnGapProperty<number>>('columnGap')
export const rowGapRule= rule<RowGapProperty<number>>('rowGap')
/// Items
//https://developer.mozilla.org/en-US/docs/Glossary/Flex_Item
export const orderRule= rule<number>('order')
export const flexRule= rule<FlexProperty<number>>('flex')
export const flexBasisRule= rule<FlexBasisProperty<number>>('flexBasis')
export const flexGrowRule= rule<GlobalsNumber>('flexGrow')
export const flexShrinkRule= rule<GlobalsNumber>('flexShrink')
