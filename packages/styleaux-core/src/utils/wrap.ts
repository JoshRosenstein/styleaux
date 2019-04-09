import {isNil} from 'typed-is'

/**
 * Creates an object if name exists and value exists
 *
 * @param name Object Key
 * @param value Object Value
 */

export function wrap(
  name?: string | number | null,
  value?: null | string | number | {[index: string]: any},
) {
  return !isNil(value) ? (name ? {[name]: value} : value) : null
}

/**
 * Factory version of wrap-Creates an object if name exists and value exists
 *
 *@link wrap
 *
 * @param name Object Key
 * @param value Object Value
 */
export const createWrap = (name?: string | number) => (value:null | string | number | {[index: string]: any}) => wrap(name, value)

