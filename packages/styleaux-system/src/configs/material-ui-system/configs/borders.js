function getBorder(value) {
  if (typeof value !== 'number') {
    return value
  }

  return `${value}px solid${value === 0 ? ' !important' : ''}`
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
  path: 'palette',
  postFn: value => `${value} !important`,
}

export const borderRadius = {
  prop: 'borderRadius',
  path: 'shape',
  postFn: px,
}
