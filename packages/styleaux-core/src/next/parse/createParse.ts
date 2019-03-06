import {prop, flow} from '@roseys/futils'

import {OPTIONSKEY} from './constants'
import {parseRulesC, getRulesC, groupRules, formatOutput} from './core'
import {isFunction} from 'typed-is'

import {isMQ} from './utils'

/**
 * @requires switchP
 * @requires toMq
 * @requires breakpointsP
 * @requires responsiveP
 */

const createParse = (switchProp, toMq, breakpointsP, responsiveP, options) => {
  let config = prop(OPTIONSKEY, options)

  const initSelectorTransform = (selector, props) => {
    // / Duplicate overidable keys
    selector = selector.replace(/__.$/, '')
    // / Check if Selector is MQ shorthand MQ_mobile || mq_1
    if (isMQ(selector)) {
      const bp = selector.replace(/^MQ_|mq_+/, '')
      selector = toMq(breakpointsP(bp)(props) || bp)
    }
    return selector
  }

  const parseRules = parseRulesC(
    switchProp,
    initSelectorTransform,
    responsiveP,
    breakpointsP,
  )

  // //////Start Styler
  const getRules = getRulesC(parseRules, config)
  return function stylerProp(obj, groupSelectors = true) {
    return function styler(props) {
      let rules
      if (isFunction(obj)) {
        return stylerProp(obj(props))(props)
      }
      if (Array.isArray(obj)) {
        rules = obj.reduce((r, o) => r.concat(getRules({obj: o, props})), [])
      } else {
        // return obj
        rules = getRules({obj, props})
      }

      return flow(
        rules,
        groupRules(groupSelectors),
        formatOutput,
        //  cleanAndSort
      )
    }
  }
}

export default createParse
