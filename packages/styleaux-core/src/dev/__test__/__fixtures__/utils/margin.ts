import {MarginTopProperty} from '@johanneslumpe/css-types'
import {style} from '../main'
import {IthemeS, IBreakPoints} from '../theme'
import {compose} from './compose'

type SpaceKeys = keyof IthemeS['space']

type SpaceUnit = number | MarginTopProperty

export const m = style<{m: SpaceUnit | number}>({
  cssProp: 'margin',
  prop: 'm',
})

export const tm = style<{tm: SpaceKeys}>({
  cssProp: 'margin',
  prop: 'tm',
  path: 'space',
})

export const tmt = style<{tmt: SpaceKeys}>({
  cssProp: 'marginTop',
  prop: 'tmt',
  path: 'space',
})

export const mt = style<{mt: SpaceUnit}>({
  cssProp: 'marginTop',
  prop: 'mt',
})

export const tmb = style<{tmb: SpaceKeys}>({
  cssProp: 'marginBottom',
  prop: 'tmb',
  path: 'space',
})

export const mb = style<{mb: SpaceUnit}>({
  cssProp: 'marginBottom',
  prop: 'mb',
})

export const tml = style<{tml: SpaceKeys}>({
  cssProp: 'marginLeft',
  prop: 'tml',
  path: 'space',
})

export const ml = style<{ml: SpaceUnit | number}>({
  cssProp: 'marginLeft',
  prop: 'ml',
})

export const tmr = style<{tmr: SpaceKeys}, IthemeS, IBreakPoints>({
  cssProp: 'marginRight',
  prop: 'tmr',
  path: 'space',
})

export const mr = style<{mr: SpaceUnit}>({
  cssProp: 'marginRight',
  prop: 'mr',
})

export const tMargin = compose(
  tm,
  tmb,
  tmt,
  tml,
  tmr,
)
export const margin = compose(
  m,
  mb,
  mt,
  ml,
  mr,
)
