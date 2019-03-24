import {createStyles} from '@styleaux/core'
import {alignSelf, justifySelf} from '../rules/boxAlignment'

import {flex, flexBasis, flexGrow, flexShrink} from '../rules/flex'
/// Container

/// Items
//https://developer.mozilla.org/en-US/docs/Glossary/Flex_Item

export const flexItem = createStyles({
  alignSelf,
  justifySelf,
  flex,
  flexBasis,
  flexGrow,
  flexShrink,
})
