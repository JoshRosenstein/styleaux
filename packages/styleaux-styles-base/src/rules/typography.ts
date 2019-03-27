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

export const fontRule = rule<FontProperty>('font')
export const fontStyleRule = rule<FontStyleProperty>('fontStyle')
export const fontVariantRule = rule<FontVariantProperty>('fontVariant')
export const fontWeightRule = rule<FontWeightProperty>('fontWeight')
export const fontSizeRule = rule<FontSizeProperty<number>>('fontSize')
export const lineHeightRule = rule<LineHeightProperty<number>>('lineHeight')
export const fontFamilyRule = rule<FontFamilyProperty>('fontFamily')

export const letterSpacingRule = rule<LetterSpacingProperty<StringHack>>(
  'letterSpacing',
)
export const textAlignRule = rule<TextAlignProperty>('textAlign')
export const whiteSpaceRule = rule<WhiteSpaceProperty>('whiteSpace')

export const textOverflowRule = rule<TextOverflowProperty>('textOverflow')

export const textTransformRule = rule<TextTransformProperty>('textTransform')

export const wordSpacingRule = rule<WordSpacingProperty<number>>('wordSpacing')

export const wordBreakRule = rule<WordBreakProperty>('wordBreak')
