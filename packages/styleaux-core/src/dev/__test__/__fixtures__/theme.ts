export const breakpoints = {sm: 600, md: 960, lg: 1280, xl: 1920}
export const space = {none: 0, sm: 8, md: 16, lg: 32, xl: 64}

const colors = {
  common: {black: '#000', white: '#fff'},
  primary: {
    light: '#7986cb',
    main: '#3f51b5',
    dark: '#303f9f',
    contrastText: '#fff',
  },
  secondary: {
    light: '#ff4081',
    main: '#f50057',
    dark: '#c51162',
    contrastText: '#fff',
  },
  error: {
    light: '#e57373',
    main: '#f44336',
    dark: '#d32f2f',
    contrastText: '#fff',
  },
  grey: {
    '50': '#fafafa',
    '100': '#f5f5f5',
    '200': '#eeeeee',
    '300': '#e0e0e0',
    '400': '#bdbdbd',
    '500': '#9e9e9e',
    '600': '#757575',
    '700': '#616161',
    '800': '#424242',
    '900': '#212121',
    A100: '#d5d5d5',
    A200: '#aaaaaa',
    A400: '#303030',
    A700: '#616161',
  },

  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {paper: '#fff', default: '#fafafa'},
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.08)',
    selected: 'rgba(0, 0, 0, 0.14)',
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
  },
}

// helper function
function extend(obj1: {[index: string]: any}, obj2: {[index: string]: any}) {
  for (var key in obj2) obj1[key] = obj2[key]
  return obj1
}

export function flattenObj(
  obj: {[index: string]: any},
  parent: string = '',
  result: {[index: string]: any} = {},
) {
  const p = parent === '' ? parent : parent + '.'

  for (var key in obj) {
    if (
      typeof obj[key] === 'object' &&
      !Array.isArray(obj[key]) &&
      obj[key] !== null
    ) {
      extend(result, flattenObj(obj[key], p + key, result))
    } else {
      result[parent + key] = obj[key]
    }
  }
  return result
}

const colorsFlattened = {
  divider: 'rgba(0, 0, 0, 0.12)',
  'common.white': '#fff',
  'common.black': '#000',
  'primary.contrastText': '#fff',
  'primary.dark': '#303f9f',
  'primary.main': '#3f51b5',
  'primary.light': '#7986cb',
  'secondary.contrastText': '#fff',
  'secondary.dark': '#c51162',
  'secondary.main': '#f50057',
  'secondary.light': '#ff4081',
  'error.contrastText': '#fff',
  'error.dark': '#d32f2f',
  'error.main': '#f44336',
  'error.light': '#e57373',
  'grey.A700': '#616161',
  'grey.A400': '#303030',
  'grey.A200': '#aaaaaa',
  'grey.A100': '#d5d5d5',
  'grey.900': '#212121',
  'grey.800': '#424242',
  'grey.700': '#616161',
  'grey.600': '#757575',
  'grey.500': '#9e9e9e',
  'grey.400': '#bdbdbd',
  'grey.300': '#e0e0e0',
  'grey.200': '#eeeeee',
  'grey.100': '#f5f5f5',
  'grey.50': '#fafafa',
  'text.hint': 'rgba(0, 0, 0, 0.38)',
  'text.disabled': 'rgba(0, 0, 0, 0.38)',
  'text.secondary': 'rgba(0, 0, 0, 0.54)',
  'text.primary': 'rgba(0, 0, 0, 0.87)',
  'background.default': '#fafafa',
  'background.paper': '#fff',
  'action.disabledBackground': 'rgba(0, 0, 0, 0.12)',
  'action.disabled': 'rgba(0, 0, 0, 0.26)',
  'action.selected': 'rgba(0, 0, 0, 0.14)',
  'action.hover': 'rgba(0, 0, 0, 0.08)',
  'action.active': 'rgba(0, 0, 0, 0.54)',
}
export const theme = {colors, space, breakpoints}

export const themeFlat = {colors: colorsFlattened, space, breakpoints}

export type Itheme = typeof theme

export type IthemeS = typeof themeFlat
export type IBreakPoints = typeof breakpoints

export type ColorsFlattened = typeof colorsFlattened
