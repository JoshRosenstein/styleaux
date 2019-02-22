import theme from './theme'
import {createStylePreset} from '@styleaux/core'

export const {
  style,
  pxTo,
  pxToEm,
  pxToRel,
  pxToRem,
  getDefaultTheme,
  gettheme,
} = createStylePreset({
  defaultTheme: theme,
  autoLookupTheme: true,
  cssPropToThemeKeyMap: {
    margin: 'spacing',
    marginTop: 'spacing',
    marginBottom: 'spacing',
    marginLeft: 'spacing',
    marginRight: 'spacing',
    padding: 'spacing',
    paddingTop: 'spacing',
    paddingBottom: 'spacing',
    paddingLeft: 'spacing',
    paddingRight: 'spacing',

    //color: "colors"
  },
})
