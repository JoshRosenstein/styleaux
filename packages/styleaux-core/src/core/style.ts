import {createStyles} from './createStyles'
import {styler} from './styler'
import {getThemeValue} from '../getters'
import {CSSPropertiesKeys} from '../cssTypes'
import {StringHack} from '@roseys/csstype'

type StyleOptions={
  prop:CSSPropertiesKeys | StringHack,
  cssProp?:CSSPropertiesKeys,
  key?:string,
  transformValue?:Function,
  alias?:string
}

export function style<P extends {},M extends {}=never,T extends {}=never>({
  prop,
  cssProp,
  key,
  transformValue,
  alias
}:StyleOptions){
  const property = cssProp || prop as CSSPropertiesKeys

const getValue=(input, props, mediaKey) => getThemeValue(key, transformValue)(input, input, mediaKey)(props)


const getter= styler<any>({cssProp:property,getValue})
//[prop]:getter
const config={[prop]:getter} as P
if(alias){
  config[alias]=getter
}

  return createStyles<P,M,T>(config)
}
