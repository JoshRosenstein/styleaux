import {createGap, createColumnGap, createRowGap} from '@styleaux/styles-base'
import {px} from '../utils/px'

export {
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea,
} from '@styleaux/styles-base'

export const gridGap = createGap({
  key: 'space',
  transformValue: px,
})

export const gridColumnGap = createColumnGap({
  key: 'space',
  transformValue: px,
})

export const gridRowGap = createRowGap({
  key: 'space',
  transformValue: px,
})
