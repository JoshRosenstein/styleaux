import {rule} from '@styleaux/core'
import {WidthProperty } from '@roseys/csstype'
import {widthValue} from '../values/width-value'


export const widthRule  = rule<WidthProperty<number>>(
  'width',widthValue)


