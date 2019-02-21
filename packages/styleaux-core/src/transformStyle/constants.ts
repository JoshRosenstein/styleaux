export enum OPTIONSKEYS {
  root = 'transformOptions',
  keys = 'cssPropToThemeKeyMap',
  getter = 'cssPropToFunctionMap',
  functions = 'transformers',
  defaultLookup = 'autoLookupTheme', /// if enabled any value passed to a cssProp listing in cssPropToThemeKeyMap, will lookup
  defaultTransform = 'autoLookupTransformer',
}
