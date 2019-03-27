import {createStyles} from '@styleaux/core'
import {
  borderBottomRule,
  borderColorRule,
  borderLeftRule,
  borderRightRule,
  borderRule,
  borderTopRule,
  borderXRule,
  borderYRule,
} from '../rules/border'

export const borders = createStyles({
  border:borderRule,
  borderX:borderXRule,
  borderLeft:borderLeftRule,
  borderRight:borderRightRule,
  borderY:borderYRule,
  borderBottom:borderBottomRule,
  borderTop:borderTopRule,
  borderColor:borderColorRule,

})
