import {
  alignItemsRule,
  alignContentRule,
  justifyItemsRule,
  justifyContentRule,
  flexWrapRule,
  flexDirectionRule,
  flexRule,
  justifySelfRule,
  alignSelfRule,
  flexBasisRule
} from '@styleaux/styles-base'

import {createStyles} from '@styleaux/core'


export const alignItems = createStyles({alignItems: alignItemsRule()})

export const alignContent = createStyles({alignContent: alignContentRule()})
export const justifyItems = createStyles({justifyItems: justifyItemsRule()})
export const justifyContent = createStyles({justifyContent: justifyContentRule()})

export const flexWrap = createStyles({flexWrap: flexWrapRule()})
export const flexBasis = createStyles({flexBasis: flexBasisRule()})
export const flexDirection = createStyles({flexDirection: flexDirectionRule()})
export const flex = createStyles({flex: flexRule()})
export const justifySelf = createStyles({justifySelf: justifySelfRule()})
export const alignSelf = createStyles({alignSelf: alignSelfRule()})
//export const order = createStyles({order: orderRule})
