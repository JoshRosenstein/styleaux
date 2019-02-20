export const displayRaw = {
  prop: 'display',
}

export const displayPrint = {
  prop: 'displayPrint',
  transform: value => ({
    '@media print': {
      display: value,
    },
  }),
}

export default [displayRaw, displayPrint]
