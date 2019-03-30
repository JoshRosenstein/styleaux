import {createStyles,combineStyles} from '@styleaux/core'
import {backgroundColorRule , colorRule} from '../rules/colors'



export const textColor  = createStyles( {color:colorRule})
export const backgroundColor =createStyles({bg:backgroundColorRule})
export const color  =combineStyles(textColor,backgroundColor)
