import {rule} from '@styleaux/core'
import {BackgroundColorProperty, ColorProperty  } from '@roseys/csstype'



 const colorRule = <T>(name: 'backgroundColor' | 'color') => rule<T>(name)


export const backgroundColor = colorRule<BackgroundColorProperty>(
  'backgroundColor',
)

export const color = colorRule<ColorProperty>('color')

