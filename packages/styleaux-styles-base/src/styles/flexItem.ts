import {createStyles} from '@styleaux/core'
import {alignSelfRule, justifySelfRule} from '../rules/boxAlignment'

import {flexRule, flexBasisRule, flexGrowRule, flexShrinkRule} from '../rules/flex'
/// Container

/// Items
//https://developer.mozilla.org/en-US/docs/Glossary/Flex_Item

export const flexItem = createStyles({
  alignSelf:alignSelfRule,
  justifySelf:justifySelfRule,
  flex:flexRule,
  flexBasis:flexBasisRule,
  flexGrow:flexGrowRule,
  flexShrink:flexShrinkRule,
})
