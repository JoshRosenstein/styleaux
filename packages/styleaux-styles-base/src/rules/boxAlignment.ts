import {rule} from '@styleaux/core'

import {
  AlignContentProperty,
  AlignItemsProperty,
  AlignSelfProperty,
  JustifyContentProperty,
  JustifyItemsProperty,
  JustifySelfProperty,
  PlaceContentProperty,
  PlaceItemsProperty,
} from 'csstype'

//https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox

/// Shared
export const alignContent = rule<AlignContentProperty>('alignContent')
export const alignItems = rule<AlignItemsProperty>('alignItems')
export const alignSelf = rule<AlignSelfProperty>('alignSelf')
export const justifyContent = rule<JustifyContentProperty>('justifyContent')
export const justifyItems = rule<JustifyItemsProperty>('justifyContent')
export const justifySelf = rule<JustifySelfProperty>('justifyContent')
export const placeContent = rule<PlaceContentProperty>('placeContent')
export const placeItems = rule<PlaceItemsProperty>('placeItems')
