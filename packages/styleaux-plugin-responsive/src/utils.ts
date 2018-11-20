import {isPlainObject, isArray} from 'typed-is'
import {Dict} from '@styleaux/helper-plugin-utils'

export const isObjectOrArray = (x: any): x is any[] | Dict<any> =>
  isPlainObject(x) || isArray(x)
