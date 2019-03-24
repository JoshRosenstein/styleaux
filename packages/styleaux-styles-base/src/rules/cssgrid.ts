/**
 * cssgrid
 */
import {rule} from '@styleaux/core'

import {
  GridAreaProperty,
  GridAutoColumnsProperty,
  GridAutoFlowProperty,
  GridAutoRowsProperty,
  GridColumnEndProperty,
  GridColumnGapProperty,
  GridColumnStartProperty,
  GridColumnProperty,
  GridRowEndProperty,
  GridRowStartProperty,
  GridRowProperty,
  GridTemplateAreasProperty,
  GridTemplateColumnsProperty,
  GridTemplateRowsProperty,
  GridTemplateProperty,
  GridProperty,
} from '@roseys/csstype'

export const gridArea = rule<GridAreaProperty>('gridArea')
export const gridAutoColumns = rule<GridAutoColumnsProperty<0>>(
  'gridAutoColumns',
)
export const gridAutoFlow = rule<GridAutoFlowProperty>('gridAutoFlow')
export const gridAutoRows = rule<GridAutoRowsProperty<0>>('gridAutoRows')
export const gridColumnEnd = rule<GridColumnEndProperty>('gridColumnEnd')
export const gridColumnGap = rule<GridColumnGapProperty<0>>('gridColumnGap')
export const gridColumnStart = rule<GridColumnStartProperty>('gridColumnStart')
export const gridColumn = rule<GridColumnProperty>('gridColumn')
export const gridRowEnd = rule<GridRowEndProperty>('gridRowEnd')
export const gridRowStart = rule<GridRowStartProperty>('gridRowStart')
export const gridRow = rule<GridRowProperty>('gridRow')
export const gridTemplateAreas = rule<GridTemplateAreasProperty>(
  'gridTemplateAreas',
)
export const gridTemplateColumns = rule<GridTemplateColumnsProperty<0>>(
  'gridTemplateColumns',
)
export const gridTemplateRows = rule<GridTemplateRowsProperty<0>>(
  'gridTemplateRows',
)
export const gridTemplate = rule<GridTemplateProperty>('gridTemplate')
export const grid = rule<GridProperty>('grid')
