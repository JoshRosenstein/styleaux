import {isNil} from 'typed-is'

export const wrap2 = (name1: string, name2: string) => value =>
  !isNil(value) && {[name1]: value, [name2]: value}
