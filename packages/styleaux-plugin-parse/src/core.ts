import {
  merge,
  is,
  keys,
  reduce,
  last,
  pipe,
  flow,
  toArray,
  objOf,
  map,
  contains,
  when,
  all,
} from '@roseys/futils'
import {matchBlock} from '@styleaux/plugin-matchblock'

import {
  whenFunctionCallWith,
  falseToNull,
  splitSelectors,
  isAtRule,
  isTemplate,
  extractTemplateValue,
} from '@styleaux/helper-plugin-utils'

import {
  isTruthy,
  isNil,
  isPlainObject as isObject,
  isEmpty,
  isDefined,
  isArray,
} from 'typed-is'

import {
  isNestableAtRule,
  hasReference,
  isNestable,
  containsSpecial,
} from './utils'
const PSUEDO_WITHOUT_SELECTOR = /(^|\s)(:{1,2})(\w)/g
const REFERENCE_SELECTOR = /&/g

const reduceRule = (rules, result) =>
  reduce(
    (style, rule) => {
      if (isNil(rule.value)) {
        return style
      }
      if (rule.value === '' && rule.property !== 'content') {
        rule.value = undefined
      }
      // / For Nested selectors
      const location = rule.location.concat(rule.selectors.join(', '))
      location.reduce((style, selector, i, arr) => {
        selector = selector.trim()
        if (!selector) {
          if (rule.property === '@font-face') {
            style[rule.property] = style[rule.property]
              ? toArray(style[rule.property]).concat(rule.value)
              : rule.value
          } else {
            style[rule.property] = rule.value
          }
          return style
        }
        const r = {}
        if (i === arr.length - 1) {
          r[rule.property] = rule.value
        }
        style[selector] = merge(style[selector] || {}, r)
        return style[selector]
      }, style)
      // return style[selector]
      return style
    },
    result,
    rules,
  )

export const formatOutput = grouped =>
  reduce((result, rules) => reduceRule(rules, result), {}, grouped)

const isPatternBlock = key => key === '__match'

// const isResponsive = value => isArray(value)

const isResponsive = (value, BPkeys) =>
  isArray(value)
    ? true
    : isDefined(value) &&
      isObject(value) &&
      isDefined(BPkeys) &&
      all(isTruthy, map(k => contains(k, [...BPkeys, 'default']), keys(value)))

const isInlinePattern = (value, selector, location) =>
  isObject(value) &&
  !isEmpty(value) &&
  !containsSpecial(selector) &&
  !isEmpty(selector) &&
  !isNestable(last(location) || []) //&&
//  !isPatternBlock(selector)

export const parseRulesC = (
  parseInlinePattern,
  initSelectorTransform,
  responsiveP,
  breakpointsP,
) => (parseNested, selector, value, parents, location, props, options) => {
  selector = initSelectorTransform(selector, props)
  let next = selector
  const breakPointKeys = keys(breakpointsP()(props))
  /// console.log('parseRulesC', {selector, value, parents, location})
  /// console.log('isInline Test Start')
  /// console.log('isObject', isObject(value))
  /// console.log('!isEmpty', !isEmpty(value))
  /// console.log('!containsSpecial', !containsSpecial(selector))
  /// console.log('!isEmpty', !containsSpecial(selector))
  /// console.log('!isNestable', !isNestable(last(parents) || []))
  // /console.log('!isPatternBlock', !isPatternBlock(selector))

  // / If theres a parent selector- prep next selector
  if (parents.length) {
    next = next.replace(PSUEDO_WITHOUT_SELECTOR, '$1&$2$3')
    if (hasReference(next)) {
      next = next.replace(REFERENCE_SELECTOR, parents.pop())
    }
  }

  value = flow(
    value,
    whenFunctionCallWith(props),
    falseToNull,
    when(isTemplate, template => objOf(extractTemplateValue(template), 'self')),
  )
  ///console.log('parseRulesC2', {selector, value, parents, location})
  if (selector === '@font-face') {
    return {location: [], selector: '', property: selector, value}
  }

  if (isPatternBlock(selector)) {
    ////console.log('IsPatternBlock')
    return parseNested(matchBlock(value)(props), parents, location)
  }

  if (isObject(value) || isArray(value)) {
    // console.log('Object OR Array')
    if (isDefined(breakPointKeys) && isResponsive(value, breakPointKeys)) {
      // console.log('---isResponsive---')
      value = responsiveP({
        value,
        cssProp: selector,
        ...options,
      })(props)
      // return parseNested(value, parents, location);
      if (isObject(value)) {
        //console.log('isObject')
        return parseNested(value, parents, location)
      }
    } else if (isInlinePattern(value, selector, parents)) {
      // console.log('---Inline Pattern---')
      //console.log('switchPropb4', {value, options})
      value = parseInlinePattern(value, {
        cssProp: selector,
        valueOnly: true,
        ...options,
      })(props)
      // console.log('switchPropAfter', {value})
      // return parseNested(value, parents, location);
      if (isObject(value)) {
        return parseNested(value, parents, location)
      }
    }
  }
  ////console.log('---NOT Inline Pattern---')
  if (isObject(value)) {
    if (isNestable(selector)) {
      location = location.concat(selector)
    } else if (isAtRule(selector)) {
      parents = [next]
      location = []
    } else if (
      location.length &&
      isNestable(location[location.length - 1]) &&
      location[location.length - 1].indexOf(' ') === -1
    ) {
      location[location.length - 1] += ` ${selector}`
    } else {
      parents = parents.concat(next)
    }
    // console.log('---Loop---')
    return parseNested(value, parents, location)
  }
  //console.log('---NOT Object---')
  return {
    location,
    selector: parents.join(' '),
    property: selector,
    value,
  }
}

export const groupRules = (group = true) => rules => {
  const idFn = (property, selector, value, i) => {
    if (group) {
      return (
        property +
        (selector === '' ? 'root' : '') +
        (typeof value !== 'object' ? value : `__${i}`)
      )
    }
    return selector + property + (typeof value !== 'object' ? value : `__${i}`)
  }

  return reduce(
    (grouped, rule, i) => {
      const id = idFn(rule.property, rule.selector, rule.value, i)

      if (!grouped[rule.location]) {
        grouped[rule.location] = {}
      }

      if (!grouped[rule.location][id]) {
        grouped[rule.location][id] = {
          location: rule.location,
          selectors: rule.selector ? [rule.selector] : [],
          property: rule.property,
          value: rule.value,
        }
      } else if (rule.selector) {
        grouped[rule.location][id].selectors.push(rule.selector)
      }
      return grouped
    },
    {},
    rules,
  )
}

export function getRulesC(ruleParser, config) {
  // const parseRules = parseRulesC(switchProp, toMq)
  return function getRules({
    obj,
    parents = [],
    location = [],
    props,
    options = {},
  }) {
    if (is('Function')(obj)) {
      obj = obj(props)
    }

    const {options: globalOptions, ...rules} = obj
    options = {...config, ...globalOptions, ...options}
    const getNested = (givenObj, givenParents, givenLocation) =>
      getRules({
        obj: givenObj,
        parents: givenParents,
        location: givenLocation,
        options,
        props,
      })
    //@ts-ignore
    return pipe(
      keys,
      reduce(
        (result, selectors) =>
          pipe(
            splitSelectors,
            reduce((res, selector) => {
              const parsed = ruleParser(
                getNested,
                selector,
                rules[selectors],
                parents.slice(),
                location.slice(),
                props,
                options,
              )

              return res.concat(parsed)
            }, result),
          )(selectors),
        [],
      ),
    )(obj)
  }
}