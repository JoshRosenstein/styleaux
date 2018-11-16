export enum OPTIONSKEYS {
  root = 'transformOptions',
  keys = 'transformStyle.cssPropToThemeKeyMap',
  getter = 'transformStyle.cssPropToFunctionLookUp',
  functions = 'transformStyle.functions',
  defaultLookup = 'transformStyle.alwaysLookupTheme', /// if enabled any value passed to a cssProp listing in cssPropToThemeKeyMap, will lookup
  defaultTransform = 'transformStyle.alwaysLookupFunction',
}
