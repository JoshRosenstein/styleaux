import {CreateAssistant, defaultOptions} from '../..'
import {OPTIONSKEYS as TRANSFORMOPTIONKEYS} from '../../../transformStyle'
import defaultTheme from './baseTheme'
const identity = x => x
export const config = {
  ...defaultOptions,
  defaultTheme,
  responsivePOptions: {
    transform: false,
  },
  switchPOptions: {
    transform: false,
  },
  parserOptions: {
    transform: false,
  },

  [TRANSFORMOPTIONKEYS.defaultLookup]: true,
  [TRANSFORMOPTIONKEYS.defaultTransform]: true,
  [TRANSFORMOPTIONKEYS.keys]: {
    margin: 'space',
    marginTop: 'space',
    marginBottom: 'space',
    marginLeft: 'space',
    marginRight: 'space',
    padding: 'space',
    paddingTop: 'space',
    paddingBottom: 'space',
    paddingLeft: 'space',
    paddingRight: 'space',
    color: 'colors',
    fontSize: 'fontSizes',
    fontFamily: 'fonts',
    lineHeight: 'lineHeights',
    fontWeight: 'fontWeights',
    letterspace: 'letterspaces',
    maxWidth: 'maxWidths',
    minWidths: 'minWidths',
    height: 'heights',
    gridGap: 'space',
    gridColumnGap: 'space',
    gridRowGap: 'space',
    border: 'borders',
    borderColor: 'colors',
    backgroundColor: 'colors',
    boxShadow: 'shadows',
  },
  [TRANSFORMOPTIONKEYS.getter]: {
    margin: 'pxToRem',
    marginTop: 'pxToRem',
    marginBottom: 'pxToRem',
    marginLeft: 'pxToRem',
    marginRight: 'pxToRem',
    padding: 'pxToRem',
    paddingTop: 'pxToRem',
    paddingBottom: 'pxToRem',
    paddingLeft: 'pxToRem',
    paddingRight: 'pxToRem',
    fontSize: 'px',
  },
  [TRANSFORMOPTIONKEYS.functions]: {
    returnAsIs: identity,
    identity,
    propValue: identity,
    self: identity,
  },
}