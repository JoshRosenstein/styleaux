import {isPlainObject, isArray} from 'typed-is'
import {Dict} from '../types'

export const isObjectOrArray = (x: any): x is any[] | Dict<any> =>
  isPlainObject(x) || isArray(x)
