export type IMedia = typeof MEDIA

export const MEDIA = {
  D: '(min-width: 1025px)',
  T: '(min-width: 601px) and (max-width: 1024px)',
  M: '(max-width: 600px)',
  C: '(max-width: 666px)',
}

export const MQ = Object.keys(MEDIA).reduce((acc, k) => {
  acc[k] = '@media ' + MEDIA[k]
  return acc
}, {}) as IMedia

export type ITheme = typeof THEME

export const THEME = {
  media: MEDIA,
  space: {
    all: [0, 10, 20, '3rem', 60],
    M: [0, 5, 10, '2rem', 20],
    C: {sm: 1},
  },
  size: {
    nudge: {
      all: 2,
      M: 1,
    },
    xl: 100,
    none: 0,
    xxs: 2,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 32,
    xxl: 128,
  },
}
