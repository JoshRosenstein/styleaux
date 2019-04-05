import {createMaxWidth,createMinWidth,createHeight,createMaxHeight,createMinHeight,createWidth} from '@styleaux/styles-base'
import {px} from '../utils/px'

import {widthValue} from '../values/width-value'
import {wrap2} from '../utils/wrap2'
import {

  styler,
  getStyle,
  createStyles,

} from '@styleaux/core'

export {display} from '@styleaux/styles-base'

export const width = createWidth({
  key: 'widths',
  alias:'w',
  transformValue: widthValue,
})

export const minWidth = createMinWidth({
  key: 'minWidths',
  transformValue: px,
})

export const maxWidth = createMaxWidth({
  key: 'maxWidth',
  transformValue: px,
})

export const height = createHeight({
  key: 'heights',
  transformValue: px,
})

export const maxHeight = createMaxHeight({
  key: 'maxHeights',
  transformValue: px,
})

export const minHeight = createMinHeight({
  key: 'minHeights',
  transformValue: px,
})


export const size = createStyles({
  size: styler<number | string>({
    getValue: getStyle({transformValue: px}),
    getStyle: wrap2('height', 'width'),
  }),
})
