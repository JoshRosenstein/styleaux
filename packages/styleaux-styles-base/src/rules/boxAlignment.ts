/**
 * Shared Box Alignment Rules
 */
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

/**
 * This is a doc comment for "alignContent".
 */
export const alignContent = rule<AlignContentProperty>('alignContent')
/**
 * This is a doc comment for "alignItems".
 */
export const alignItems = rule<AlignItemsProperty>('alignItems')
/**
 * This is a doc comment for "alignSelf".
 */
export const alignSelf = rule<AlignSelfProperty>('alignSelf')
/**
 * This is a doc comment for "justifyContent".
 */
export const justifyContent = rule<JustifyContentProperty>('justifyContent')
/**
 * This is a doc comment for "justifyItems".
 */
export const justifyItems = rule<JustifyItemsProperty>('justifyItems')
/**
 * This is a doc comment for "justifySelf".
 */
export const justifySelf = rule<JustifySelfProperty>('justifySelf')
/**
 * This is a doc comment for "placeContent".
 */
export const placeContent = rule<PlaceContentProperty>('placeContent')
/**
 * This is a doc comment for "placeItems".
 */
export const placeItems = rule<PlaceItemsProperty>('placeItems')
