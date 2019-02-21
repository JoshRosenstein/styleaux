import {when, ifElse, either, lt, prop} from '@roseys/futils'

import {isNumber} from 'typed-is'

const isNotNumber = (x: any) => !isNumber(x)

export const px = when(isNumber, num => `${num}px`)
export const css = props => prop('css', props)
export const themed = key => props => prop(key, prop('theme', props))

//{[x: string]: string}
const withPx = <T extends {[x: string]: string}>(config: T) =>
  Object.assign(config, {
    postFn: px,
  })

const withCommonDimensionConfig = <T extends {[x: string]: string}>(
  config: T,
) =>
  Object.assign(config, {
    postFn: px,
    path: 'space',
  })

export const getWidth = ifElse(
  either(isNotNumber, lt(1)),
  px,
  decimal => `${decimal * 100}%`,
)

export const width = {
  prop: 'width',
  postFn: getWidth,
}

export const fontSize = {
  cssProp: 'fontSize',
  path: 'fontSizes',
  prop: 'fontSize',
  postFn: px,
  transform: true,
}

export const textColor = {
  prop: 'color',
  path: 'colors',
}

export const bgColor = {
  prop: 'bg',
  cssProp: 'backgroundColor',
  path: 'colors',
}

export const color = [textColor, bgColor]

// typography
export const fontFamily = {
  prop: 'fontFamily',
  path: 'fonts',
}

export const textAlign = {
  prop: 'textAlign',
}

export const lineHeight = {
  prop: 'lineHeight',
  path: 'lineHeights',
}

export const fontWeight = {
  prop: 'fontWeight',
  path: 'fontWeights',
}

export const fontStyle = {
  prop: 'fontStyle',
}

export const letterSpacing = {
  prop: 'letterSpacing',
  path: 'letterSpacings',
  postFn: px,
}

// layout
export const display = {
  prop: 'display',
}

export const maxWidth = withPx({
  prop: 'maxWidth',
  path: 'maxWidths',
})

export const minWidth = withPx({
  prop: 'minWidth',
  path: 'minWidths',
})

export const height = withPx({
  prop: 'height',
  path: 'heights',
})

export const maxHeight = withPx({
  prop: 'maxHeight',
  path: 'maxHeights',
})

export const minHeight = withPx({
  prop: 'minHeight',
  path: 'minHeights',
})

export const sizeWidth = withPx({
  prop: 'size',
  cssProp: 'width',
})

export const sizeHeight = withPx({
  prop: 'size',
  cssProp: 'height',
})

export const size = [sizeHeight, sizeWidth]

export const ratioPadding = {
  prop: 'ratio',
  cssProp: 'paddingBottom',
  postFn: n => `${n * 100}%`,
}

// export const ratio = props =>
//   props.ratio
//     ? {
//         height: 0,
//         ...ratioPadding(props),
//       }
//     : null
// ratio.propTypes = {
//   ...ratioPadding.propTypes,
// }

export const verticalAlign = {
  prop: 'verticalAlign',
}

// flexbox
export const alignItems = {
  prop: 'alignItems',
}

export const alignContent = {
  prop: 'alignContent',
}

export const justifyItems = {
  prop: 'justifyItems',
}

export const justifyContent = {
  prop: 'justifyContent',
}

export const flexWrap = {
  prop: 'flexWrap',
}

export const flexBasis = {
  prop: 'flexBasis',
  postFn: getWidth,
}

export const flexDirection = {
  prop: 'flexDirection',
}

export const flex = {
  prop: 'flex',
}

export const justifySelf = {
  prop: 'justifySelf',
}

export const alignSelf = {
  prop: 'alignSelf',
}

export const order = {
  prop: 'order',
}

// grid
export const gridGap = withCommonDimensionConfig({
  prop: 'gridGap',
})

export const gridColumnGap = withCommonDimensionConfig({
  prop: 'gridColumnGap',
})

export const gridRowGap = withCommonDimensionConfig({
  prop: 'gridRowGap',
})

export const gridColumn = {
  prop: 'gridColumn',
}

export const gridRow = {
  prop: 'gridRow',
}

export const gridAutoFlow = {
  prop: 'gridAutoFlow',
}

export const gridAutoColumns = {
  prop: 'gridAutoColumns',
}

export const gridAutoRows = {
  prop: 'gridAutoRows',
}

export const gridTemplateColumns = {
  prop: 'gridTemplateColumns',
}

export const gridTemplateRows = {
  prop: 'gridTemplateRows',
}

export const gridTemplateAreas = {
  prop: 'gridTemplateAreas',
}

export const gridArea = {
  prop: 'gridArea',
}

// borders
const getBorder = n => (isNumber(n) && n > 0 ? `${n}px solid` : n)

const borderHelper = cssProp => ({
  cssProp,
  path: 'borders',
  postFn: getBorder,
})

export const border = borderHelper('border')

export const borderTop = borderHelper('borderTop')

export const borderRight = borderHelper('borderRight')

export const borderBottom = borderHelper('borderBottom')
export const borderLeft = borderHelper('borderLeft')

export const borders = [
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
]

export const borderColor = {
  prop: 'borderColor',
  path: 'colors',
}

export const borderRadius = {
  prop: 'borderRadius',
  path: 'radii',
  postFn: px,
}

export const boxShadow = {
  prop: 'boxShadow',
  path: 'shadows',
}

export const opacity = {
  prop: 'opacity',
}

export const overflow = {
  prop: 'overflow',
}

// backgrounds
export const background = {
  prop: 'background',
}

export const backgroundImage = {
  prop: 'backgroundImage',
}

export const backgroundSize = {
  prop: 'backgroundSize',
}

export const backgroundPosition = {
  prop: 'backgroundPosition',
}

export const backgroundRepeat = {
  prop: 'backgroundRepeat',
}

// position
export const position = {
  prop: 'position',
}

export const zIndex = {
  prop: 'zIndex',
}

const positionHelper = prop => ({prop, postFn: px})
export const top = positionHelper('top')

export const right = positionHelper('right')

export const bottom = positionHelper('bottom')

export const left = positionHelper('left')

const spaceHelper = cssProp => prop =>
  withCommonDimensionConfig({
    cssProp,
    prop,
  })

const LEFT = 'Left'
const RIGHT = 'Right'
const TOP = 'Top'
const BOTTOM = 'Bottom'

const PADDING = 'padding'
const paddingHelper = spaceHelper(PADDING)
export const padding = [paddingHelper(PADDING), paddingHelper('p')]

const PADDINGLEFT = PADDING + LEFT
const paddingLeftHelper = spaceHelper(PADDINGLEFT)
export const paddingLeft = [
  paddingLeftHelper(PADDINGLEFT),
  paddingLeftHelper('pl'),
  paddingLeftHelper('px'),
]

const PADDINGRIGHT = PADDING + RIGHT
const paddingRightHelper = spaceHelper(PADDINGRIGHT)
export const paddingRight = [
  paddingRightHelper(PADDINGRIGHT),
  paddingRightHelper('pr'),
  paddingRightHelper('px'),
]

const PADDINGTOP = PADDING + TOP
const paddingTopHelper = spaceHelper(PADDINGTOP)
export const paddingTop = [
  paddingTopHelper(PADDINGTOP),
  paddingTopHelper('pt'),
  paddingTopHelper('py'),
]

const PADDINGBOTTOM = PADDING + BOTTOM
const paddingBottomHelper = spaceHelper(PADDINGBOTTOM)
export const paddingBottom = [
  paddingBottomHelper(PADDINGBOTTOM),
  paddingBottomHelper('pb'),
  paddingBottomHelper('py'),
]

const MARGIN = 'margin'
const marginHelper = spaceHelper(MARGIN)
export const margin = [marginHelper(MARGIN), marginHelper('m')]

const MARGINLEFT = MARGIN + LEFT
const marginLeftHelper = spaceHelper(MARGINLEFT)
export const marginLeft = [
  marginLeftHelper(MARGINLEFT),
  marginLeftHelper('ml'),
  marginLeftHelper('mx'),
]

const MARGINRIGHT = MARGIN + RIGHT
const marginRightHelper = spaceHelper(MARGINRIGHT)
export const marginRight = [
  marginRightHelper(MARGINRIGHT),
  marginRightHelper('mr'),
  marginRightHelper('mx'),
]

const MARGINTOP = MARGIN + TOP
const marginTopHelper = spaceHelper(MARGINTOP)
export const marginTop = [
  marginTopHelper(MARGINTOP),
  marginTopHelper('mt'),
  marginTopHelper('my'),
]

const MARGINBOTTOM = MARGIN + BOTTOM
const marginBottomHelper = spaceHelper(MARGINBOTTOM)
export const marginBottom = [
  marginBottomHelper(MARGINBOTTOM),
  marginBottomHelper('mb'),
  marginBottomHelper('my'),
]

export const space = [
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  margin,
  paddingTop,
  paddingBottom,
  paddingRight,
  paddingLeft,
  padding,
]
