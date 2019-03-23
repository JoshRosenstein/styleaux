import {rule} from '@styleaux/core'

import {
  FlexBasisProperty,
  FlexDirectionProperty,
  FlexFlowProperty,
  FlexProperty,
  FlexWrapProperty,
  GlobalsNumber,
} from '@roseys/csstype'

//https://developer.mozilla.org/en-US/docs/Glossary/Flex_Container

/// Container
export const flexFlow = rule<FlexFlowProperty>('flexFlow')
export const flexDirection = rule<FlexDirectionProperty>('flexDirection')
export const flexWrap = rule<FlexWrapProperty>('flexWrap')

/// Items
//https://developer.mozilla.org/en-US/docs/Glossary/Flex_Item
export const order = rule<number>('order')
export const flex = rule<FlexProperty<string>>('flex')
export const flexBasis = rule<FlexBasisProperty<string>>('flexBasis')
export const flexGrow = rule<GlobalsNumber>('flexGrow')
export const flexShrink = rule<GlobalsNumber>('flexShrink')
