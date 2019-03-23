import {rule} from '@styleaux/core'

import {ColumnGapProperty, GapProperty, RowGapProperty} from '@roseys/csstype'

//https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox

// Flex
export const columnGap = rule<ColumnGapProperty<string | 0>>('columnGap')
export const gap = rule<GapProperty<string | 0>>('gap')
export const rowGap = rule<RowGapProperty<string | 0>>('rowGap')
