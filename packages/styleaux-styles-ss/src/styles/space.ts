import {createStyles} from '@styleaux/core'
import {
  marginRule,
  marginBottomRule,
  marginLeftRule,
  marginRightRule,
  marginTopRule,
  marginXRule,
  marginYRule,
  paddingRule,
  paddingBottomRule,
  paddingLeftRule,
  paddingRightRule,
  paddingTopRule,
  paddingXRule,
  paddingYRule,
} from '../rules/space'

export const margin=createStyles({ m:marginRule})
export const marginTop=createStyles({ mt:marginTopRule})

export const space = createStyles( {
  m:marginRule,
  my:marginYRule,
  mt:marginTopRule,
  mb:marginBottomRule,
  mx:marginXRule,
  ml:marginLeftRule,
  mr:marginRightRule,
  p:paddingRule,
  py:paddingYRule,
  pt:paddingTopRule,
  pb:paddingBottomRule,
  px:paddingXRule,
  pl:paddingLeftRule,
  pr:paddingRightRule,

})


//  type T=typeof marginTop

// export type Arg1<T> = T extends (arg1: infer U, ...args: any[]) => any
//   ? U
//   : never

//    type a=T['_styleProps']
//    type aa=Arg1<T>
