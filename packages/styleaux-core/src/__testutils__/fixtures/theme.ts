export type Theme = typeof theme
export type Media = typeof media

const media = {
  small: '@media screen and (min-width:320px)',
  medium: '@media screen and (min-width:600px)',
  large: '@media screen and (min-width:1280px)',

}
export const theme = {
  media,
  space: {
    none: 0,
    xxs: 2,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 32,
    xl: 100,
    xxl: 128,
  },

  colors: {
    grayBlack: '#22292f',
    grayDarkest: '#3d4852',
    grayDarker: '#606f7b',
    grayDark: '#8795a1',
    gray: '#b8c2cc',
    grayLight: '#dae1e7',
    grayLighter: '#f1f5f8',
    grayLightest: '#f8fafc'
  }
}

