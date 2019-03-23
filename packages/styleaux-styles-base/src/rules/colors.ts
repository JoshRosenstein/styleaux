import {rule} from '@styleaux/core'
import {BackgroundColorProperty, NamedColor , } from '@roseys/csstype'


export type ColorKeys = 'backgroundColor' | 'color'
export const colorRule = <T>(name: ColorKeys) => rule<T>(name)

//https://github.com/Microsoft/TypeScript/issues/29729
type LiteralUnion<T extends U, U = string> = T | (U & { zz_IGNORE_ME?: never })

type ColorProperty= LiteralUnion< "currentcolor" | NamedColor >

export const backgroundColor = colorRule<BackgroundColorProperty>(
  'backgroundColor',
)

export const color = colorRule<ColorProperty>('backgroundColor')

const a= String('1')


const t=color('as',{})
