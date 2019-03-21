import {createStyles} from '@styleaux/core'
import {
  alignContent,
  alignItems,
  alignSelf,
  justifyContent,
  justifyItems,
  justifySelf,
  placeContent,
  placeItems,
} from '../rules/boxAlignment'
import {columnGap, gap, rowGap} from '../rules/boxAlignmentFlex'
import {
  flexFlow,
  flexDirection,
  flexWrap,
  order,
  flex as flexRule,
  flexBasis,
  flexGrow,
  flexShrink,
} from '../rules/flex'
/// Container

/// Items
//https://developer.mozilla.org/en-US/docs/Glossary/Flex_Item

export const flexItem = createStyles({
  alignSelf,
  justifySelf,
  flex: flexRule,
  flexBasis,
  flexGrow,
  flexShrink,
})

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
