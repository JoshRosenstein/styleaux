import {rule} from '@styleaux/core'
import {BackgroundColorProperty, ColorProperty  } from '@roseys/csstype'



 const colorRuleHelper = <T>(name: 'backgroundColor' | 'color') => rule<T>(name)


export const backgroundColorRule = colorRuleHelper<BackgroundColorProperty>(
  'backgroundColor',
)

export const colorRule = colorRuleHelper<ColorProperty>('color')

