import {rule} from '@styleaux/core'
import {BackgroundColorProperty, ColorProperty  } from '@roseys/csstype'
import {themeValue} from '../values/theme-value'
import {COLOR_KEY} from '../constants'

 const colorRuleHelper = <T>(name: 'backgroundColor' | 'color') => rule<T>(name,themeValue({themeKey:COLOR_KEY}))



export const backgroundColorRule = colorRuleHelper<BackgroundColorProperty>(
  'backgroundColor',
)

export const colorRule = colorRuleHelper<ColorProperty>('color')

