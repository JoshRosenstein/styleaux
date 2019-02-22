import {px, percent} from '../common/transformers'

import {
  borderConfig,
  borderTopConfig,
  borderBottomConfig,
  borderRightConfig,
  borderLeftConfig,
  borderColorConfig,
  borderRadiusConfig,
  boxShadowConfig,
} from '../common/borderConfig'

export {
  borderConfig,
  borderTopConfig,
  borderBottomConfig,
  borderRightConfig,
  borderLeftConfig,
  borderColorConfig,
  borderRadiusConfig,
  boxShadowConfig,
}
export const widthConfig = {
  prop: 'width',
  postFn: percent,
}

export const fontSizeConfig = {
  prop: 'fontSize',
  path: 'fontSizes',
  postFn: px,
}

export const textColorConfig = {
  prop: 'color',
  path: 'colors',
}

export const bgColorConfig = {
  prop: 'bg',
  cssProp: 'backgroundColor',
  path: 'colors',
}

export const colorConfig = [textColorConfig, bgColorConfig]

export {
  lineHeightConfig,
  fontWeightConfig,
  letterSpacingConfig,
  fontFamilyConfig,
  textAlignConfig,
} from '../common/typographyConfig'
// typography
// export const fontFamilyConfig = {
//   prop: 'fontFamily',
//   path: 'fonts',
// }

// export const textAlignConfig = {
//   prop: 'textAlign',
// }

// export const lineHeightConfig = {
//   prop: 'lineHeight',
//   path: 'lineHeights',
// }

// export const fontWeightConfig = {
//   prop: 'fontWeight',
//   path: 'fontWeights',
// }

export const fontStyleConfig = {
  prop: 'fontStyle',
}

// export const letterSpacingConfig = {
//   prop: 'letterSpacing',
//   path: 'letterSpacings',
//   postFn: px,
// }

// layout
// export const displayConfig = {
//   prop: 'display',
// }

export const maxWidthConfig = {
  prop: 'maxWidth',
  path: 'maxWidths',
  postFn: px,
}

export const minWidthConfig = {
  prop: 'minWidth',
  path: 'minWidths',
  postFn: px,
}

export const heightConfig = {
  prop: 'height',
  path: 'heights',
  postFn: px,
}

export const maxHeightConfig = {
  prop: 'maxHeight',
  path: 'maxHeights',
  postFn: px,
}

export const minHeightConfig = {
  prop: 'minHeight',
  path: 'minHeights',
  postFn: px,
}

export const sizeWidthConfig = {
  prop: 'size',
  cssProp: 'width',
  postFn: px,
}

export const sizeHeightConfig = {
  prop: 'size',
  cssProp: 'height',
  postFn: px,
}

export const sizeConfig = [sizeHeightConfig, sizeWidthConfig]

export const ratioPaddingConfig = {
  prop: 'ratio',
  cssProp: 'paddingBottom',
  postFn: n => n * 100 + '%',
}

export const verticalAlignConfig = {
  prop: 'verticalAlign',
}

export {
  alignItemsConfig,
  alignContentConfig,
  displayConfig,
  justifyContentConfig,
  flexWrapConfig,
  flexDirectionConfig,
  flexConfig,
  justifySelfConfig,
  alignSelfConfig,
  orderConfig,
  flexBasisConfig,
} from '../common/flexConfig'
// flexbox
// export const alignItemsConfig = {
//   prop: 'alignItems',
// }

// export const alignContentConfig = {
//   prop: 'alignContent',
// }

export const justifyItemsConfig = {
  prop: 'justifyItems',
}

// export const justifyContentConfig = {
//   prop: 'justifyContent',
// }

// export const flexWrapConfig = {
//   prop: 'flexWrap',
// }

// export const flexBasisConfig = {
//   prop: 'flexBasis',
//   postFn: percent,
// }

// export const flexDirectionConfig = {
//   prop: 'flexDirection',
// }

// export const flexConfig = {
//   prop: 'flex',
// }

// export const justifySelfConfig = {
//   prop: 'justifySelf',
// }

// export const alignSelfConfig = {
//   prop: 'alignSelf',
// }

// export const orderConfig = {
//   prop: 'order',
// }

export {
  gridGapConfig,
  gridColumnGapConfig,
  gridRowConfig,
  gridAutoFlowConfig,
  gridAutoColumnsConfig,
  gridAutoRowsConfig,
  gridTemplateColumnsConfig,
  gridTemplateRowsConfig,
  gridTemplateAreasConfig,
  gridAreaConfig,
} from '../common/gridConfig'
// grid
// export const gridGapConfig = {
//   prop: 'gridGap',
//   postFn: px,
//   path: 'space',
// }

// export const gridColumnGapConfig = {
//   prop: 'gridColumnGap',
//   postFn: px,
//   path: 'space',
// }

export const gridRowGapConfig = {
  prop: 'gridRowGap',
  postFn: px,
  path: 'space',
}

export const gridColumnConfig = {
  prop: 'gridColumn',
}

// export const gridRowConfig = {
//   prop: 'gridRow',
// }

// export const gridAutoFlowConfig = {
//   prop: 'gridAutoFlow',
// }

// export const gridAutoColumnsConfig = {
//   prop: 'gridAutoColumns',
// }

// export const gridAutoRowsConfig = {
//   prop: 'gridAutoRows',
// }

// export const gridTemplateColumnsConfig = {
//   prop: 'gridTemplateColumns',
// }

// export const gridTemplateRowsConfig = {
//   prop: 'gridTemplateRows',
// }

// export const gridTemplateAreasConfig = {
//   prop: 'gridTemplateAreas',
// }

// export const gridAreaConfig = {
//   prop: 'gridArea',
// }

// borders
//const getBorder = n => (num(n) && n > 0 ? n + 'px solid' : n)

// export const borderConfig = {
//   prop: 'border',
//   path: 'borders',
//   postFn: getBorder,
// }

// export const borderTopConfig = {
//   prop: 'borderTop',
//   path: 'borders',
//   postFn: getBorder,
// }

// export const borderRightConfig = {
//   prop: 'borderRight',
//   path: 'borders',
//   postFn: getBorder,
// }

// export const borderBottomConfig = {
//   prop: 'borderBottom',
//   path: 'borders',
//   postFn: getBorder,
// }

// export const borderLeftConfig = {
//   prop: 'borderLeft',
//   path: 'borders',
//   postFn: getBorder,
// }

export const bordersConfig = [
  borderConfig,
  borderTopConfig,
  borderRightConfig,
  borderBottomConfig,
  borderLeftConfig,
]

// export const borderColorConfig = {
//   prop: 'borderColor',
//   path: 'colors',
// }

// export const borderRadiusConfig = {
//   prop: 'borderRadius',
//   path: 'radii',
//   postFn: px,
// }

// export const boxShadowConfig = {
//   prop: 'boxShadow',
//   path: 'shadows',
// }

export const opacityConfig = {
  prop: 'opacity',
}

export const overflowConfig = {
  prop: 'overflow',
}

export {
  backgroundConfig,
  backgroundImageConfig,
  backgroundSizeConfig,
  backgroundPositionConfig,
  backgroundRepeatConfig,
} from '../common/backgroundsConfig'
// backgrounds
// export const backgroundConfig = {
//   prop: 'background',
// }

// export const backgroundImageConfig = {
//   prop: 'backgroundImage',
// }

// export const backgroundSizeConfig = {
//   prop: 'backgroundSize',
// }

// export const backgroundPositionConfig = {
//   prop: 'backgroundPosition',
// }

// export const backgroundRepeatConfig = {
//   prop: 'backgroundRepeat',
// }

export {
  positionConfig,
  topConfig,
  rightConfig,
  bottomConfig,
  leftConfig,
} from '../common/positionsConfig'
// position
// export const positionConfig = {
//   prop: 'position',
// }

export const zIndexConfig = {
  prop: 'zIndex',
}

// export const topConfig = {
//   prop: 'top',
//   postFn: px,
// }

// export const rightConfig = {
//   prop: 'right',
//   postFn: px,
// }

// export const bottomConfig = {
//   prop: 'bottom',
//   postFn: px,
// }

// export const leftConfig = {
//   prop: 'left',
//   postFn: px,
// }

export const textStyleConfig = {
  cssProp: false,
  prop: 'textStyle',
  path: 'textStyles',
}

export const colorStyleConfig = {
  cssProp: false,
  prop: 'colors',
  path: 'colorStyles',
}

export const buttonStyleConfig = {
  cssProp: false,
  path: 'buttons',
}
