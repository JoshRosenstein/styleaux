
import {px} from '@styleaux/tools'
import {isString} from 'typed-is'
import {themeValue} from './theme-value'
import {WIDTH_KEY} from '../constants'
import { AnyFunc } from '@styleaux/core/dist-types/types';


export const getWidth = (n:string|number) => isString(n)?n:(n > 1 ? px(n) : n * 100 + '%')

export const createwidthValue=({
  themeKey=WIDTH_KEY,
  transformValue=getWidth
}:{themeKey?:string,transformValue?:AnyFunc}={})=>themeValue({themeKey,transformValue})

export const widthValue=createwidthValue()
