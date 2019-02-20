export const isAtRule = (selector: string): boolean =>
  selector.indexOf('@') === 0

export const isMQ = (selector: string): boolean => /^(MQ|mq)+/.test(selector)

export const PSUEDO_WITHOUT_SELECTOR = /(^|\s)(:{1,2})(\w)/g
export const REFERENCE_SELECTOR = /&/g

export const isNestableAtRule = selector =>
  /@\S*\b(media|supports|keyframes)\b/.test(selector)

export const hasReference = selector => selector.indexOf('&') !== -1

export const isNestable = selector =>
  isAtRule(selector) && isNestableAtRule(selector)

export const containsSpecial = str =>
  /[~`!@#$%\^&*+=\-\[\]\\';.,/{}|\\":<>\?\s]/g.test(str)
