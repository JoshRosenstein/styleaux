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
  GridGapProperty,
  GridRowGapProperty
} from '@roseys/csstype'

export const gridAreaRule= rule<GridAreaProperty>('gridArea')
export const gridAutoColumnsRule= rule<GridAutoColumnsProperty<0>>(
  'gridAutoColumns',
)
export const gridAutoFlowRule= rule<GridAutoFlowProperty>('gridAutoFlow')
export const gridAutoRowsRule= rule<GridAutoRowsProperty<0>>('gridAutoRows')
export const gridColumnEndRule= rule<GridColumnEndProperty>('gridColumnEnd')
export const gridColumnGapRule= rule<GridColumnGapProperty<0>>('gridColumnGap')
export const gridColumnStartRule= rule<GridColumnStartProperty>('gridColumnStart')
export const gridColumnRule= rule<GridColumnProperty>('gridColumn')
export const gridRowEndRule= rule<GridRowEndProperty>('gridRowEnd')
export const gridRowStartRule= rule<GridRowStartProperty>('gridRowStart')
export const gridRowRule= rule<GridRowProperty>('gridRow')
export const gridTemplateAreasRule= rule<GridTemplateAreasProperty>(
  'gridTemplateAreas',
)
export const gridTemplateColumnsRule= rule<GridTemplateColumnsProperty<0>>(
  'gridTemplateColumns',
)
export const gridTemplateRowsRule= rule<GridTemplateRowsProperty<0>>(
  'gridTemplateRows',
)
export const gridTemplateRule= rule<GridTemplateProperty>('gridTemplate')

export const gridGapRule= rule<GridGapProperty<number>>('gridGap')
export const gridRowGapRule= rule<GridRowGapProperty<number>>('gridRowGap')

export const gridRule= rule<GridProperty>('grid')
