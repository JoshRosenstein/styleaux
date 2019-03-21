import {rule} from '@styleaux/core'
import {BackgroundColorProperty, ColorProperty} from 'csstype'

export type ColorKeys = 'backgroundColor' | 'color'
export const colorRule = <T>(name: ColorKeys) => rule<T>(name)

export const backgroundColor = colorRule<BackgroundColorProperty>(
  'backgroundColor',
)

export const color = colorRule<ColorProperty>('backgroundColor')
