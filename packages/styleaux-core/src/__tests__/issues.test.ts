import { createStyles, combineStyles } from '../'

test('Static', () => {

  const debug1 = createStyles({
    debug: {
      '*:not(path):not(g)': {
        color: 'hsla(210, 100%, 100%, 0.9) !important',
        background: 'hsla(210, 100%,50%, 0.5) !important',
        outline: 'solid 0.25rem hsla(210, 100%, 100%, 0.5) !important',
        boxShadow: 'none !important',
      },
    },
  });

  expect(debug1({ debug: true })).toEqual([{ "*:not(path):not(g)": { "background": "hsla(210, 100%,50%, 0.5) !important", "boxShadow": "none !important", "color": "hsla(210, 100%, 100%, 0.9) !important", "outline": "solid 0.25rem hsla(210, 100%, 100%, 0.5) !important" } }])
})

test('Static Combine', () => {

  const debug1 = createStyles<{ debug: boolean }>({
    debug: {
      '*:not(path):not(g)': {
        color: 'hsla(210, 100%, 100%, 0.9) !important',
        background: 'hsla(210, 100%,50%, 0.5) !important',
        outline: 'solid 0.25rem hsla(210, 100%, 100%, 0.5) !important',
        boxShadow: 'none !important',
      },
    },
  });
  const style = combineStyles(debug1, createStyles({ something: { color: 'red' } }))
  expect(style({ debug: true })).toEqual([{ "*:not(path):not(g)": { "background": "hsla(210, 100%,50%, 0.5) !important", "boxShadow": "none !important", "color": "hsla(210, 100%, 100%, 0.9) !important", "outline": "solid 0.25rem hsla(210, 100%, 100%, 0.5) !important" } }])
})
