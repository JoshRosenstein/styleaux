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
} from '@roseys/csstype'

//https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox

/// Shared
const alignContent = rule<AlignContentProperty>('alignContent')
const alignItems = rule<AlignItemsProperty>('alignItems')
const alignSelf = rule<AlignSelfProperty>('alignSelf')
const justifyContent = rule<JustifyContentProperty>('justifyContent')
const justifyItems = rule<JustifyItemsProperty>('justifyItems')
const justifySelf = rule<JustifySelfProperty>('justifySelf')
const placeContent = rule<PlaceContentProperty>('placeContent')
const placeItems = rule<PlaceItemsProperty>('placeItems')

export {
  alignContent,
  alignItems,
  alignSelf,
  justifyContent,
  justifyItems,
  justifySelf,
  placeContent,
  placeItems,
}
