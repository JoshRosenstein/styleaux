import {rule} from '@styleaux/core'
import {
  FontSizeProperty,
  FontProperty,
  FontVariantProperty,
  FontStyleProperty,
  WordBreakProperty,
  WordSpacingProperty,
  TextOverflowProperty,
  TextTransformProperty,
  FontFamilyProperty,
  WhiteSpaceProperty,
  TextAlignProperty,
  FontWeightProperty,
  LineHeightProperty,
  LetterSpacingProperty,
  StringHack,
} from '@roseys/csstype'

export const font = rule<FontProperty>('font')
export const fontStyle = rule<FontStyleProperty>('fontStyle')
export const fontVariant = rule<FontVariantProperty>('fontVariant')
export const fontWeight = rule<FontWeightProperty>('fontWeight')
export const fontSize = rule<FontSizeProperty<number>>('fontSize')
export const lineHeight = rule<LineHeightProperty<number>>('lineHeight')
export const fontFamily = rule<FontFamilyProperty>('fontFamily')

export const letterSpacing = rule<LetterSpacingProperty<StringHack>>(
  'letterSpacing',
)
export const textAlign = rule<TextAlignProperty>('textAlign')
export const whiteSpace = rule<WhiteSpaceProperty>('whiteSpace')

export const textOverflow = rule<TextOverflowProperty>('textOverflow')

export const textTransform = rule<TextTransformProperty>('textTransform')

export const wordSpacing = rule<WordSpacingProperty<number>>('wordSpacing')

export const wordBreak = rule<WordBreakProperty>('wordBreak')
