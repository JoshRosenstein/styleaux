import {PaddingTopProperty} from '@johanneslumpe/css-types'
import {style} from '../aux'
import {IthemeS, IBreakPoints} from '../theme'
import {compose} from './compose'

type SpaceKeys = keyof IthemeS['space']

type SpaceUnit = number | PaddingTopProperty

export const p = style<{p: SpaceUnit | number}>({
  cssProp: 'padding',
  prop: 'p',
})

export const tp = style<{tp: SpaceKeys}>({
  cssProp: 'padding',
  prop: 'tp',
  path: 'space',
})

export const tpt = style<{tpt: SpaceKeys}>({
  cssProp: 'paddingTop',
  prop: 'tpt',
  path: 'space',
})

export const pt = style<{pt: SpaceUnit}>({
  cssProp: 'paddingTop',
  prop: 'pt',
})

export const tpb = style<{tpb: SpaceKeys}>({
  cssProp: 'paddingBottom',
  prop: 'tpb',
  path: 'space',
})

export const pb = style<{pb: SpaceUnit}>({
  cssProp: 'paddingBottom',
  prop: 'pb',
})

export const tpl = style<{tpl: SpaceKeys}>({
  cssProp: 'paddingLeft',
  prop: 'tpl',
  path: 'space',
})

export const pl = style<{pl: SpaceUnit | number}>({
  cssProp: 'paddingLeft',
  prop: 'pl',
})

export const tpr = style<{tpr: SpaceKeys}, IthemeS, IBreakPoints>({
  cssProp: 'paddingRight',
  prop: 'tpr',
  path: 'space',
})

export const pr = style<{pr: SpaceUnit}>({
  cssProp: 'paddingRight',
  prop: 'pr',
})

export const tMargin = compose(
  tp,
  tpb,
  tpt,
  tpl,
  tpr,
)
export const padding = compose(
  p,
  pb,
  pt,
  pl,
  pr,
)
