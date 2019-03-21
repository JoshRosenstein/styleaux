import {rule} from '@styleaux/core'

import {
  GridColumnGapProperty,
  GridGapProperty,
  GridRowGapProperty,
} from 'csstype'

// Grid
export const gridColumnGap = rule<GridColumnGapProperty<string | 0>>(
  'gridColumnGap',
)
export const gridGap = rule<GridGapProperty<string | 0>>('gridGap')
export const gridRowGap = rule<GridRowGapProperty<string | 0>>('gridRowGap')
