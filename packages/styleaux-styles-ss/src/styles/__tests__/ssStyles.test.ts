import {
  space,
  color,
  width,
  fontSize,
  size,
  gridGap,
  gridRowGap,
  borders,
} from '../'
import {combineStyles} from '@styleaux/core'
const theme = {
  colors: {
    blue: '#07c',
    black: '#111',
  },
}

test('returns color values from theme', () => {
  const a = color({ theme, color: 'blue', bg: 'black' })
expect(a).toEqual([{ color: '#07c' }, { backgroundColor: '#111' }])
})

test('returns raw color values',  () => {
  const a = color({
    theme,
    color: 'inherit',
    bg: 'tomato',
  })
  expect(a).toEqual([{ color: 'inherit' }, { backgroundColor: 'tomato' }])

})

test.skip('backgroundColor prop overrides bg prop',  () =>{
  const a = color({
    backgroundColor: 'tomato',
    bg: 'blue',
  })

  expect(a).toEqual([{ backgroundColor: 'tomato' }])

})

test('returns a pixel font-size',  () => {
  const a = fontSize({ fontSize: 48 })
  expect(a).toEqual([{ fontSize: '48px' }])


})

test('uses a default font-size scale', () => {
  const a = fontSize({ fontSize: 2 ,theme:{'fontSizes':[12, 14, 16, 20, 24, 32, 48, 64, 72]}})
  expect(a).toEqual([{ fontSize: '16px' }])
})

test('returns a string font-size', () => {
  const a = fontSize({ fontSize: '2em' })
  expect(a).toEqual( [{ fontSize: '2em' }])
})

test('returns a percentage based width', () => {
  const a = width({ width: 1 / 2 })
  expect(a).toEqual( [{ width: '50%' }])
})

test('returns a pixel based width',() => {
  const a = width({ width: 256 })
  expect(a).toEqual( [{width: '256px' }])
})

test('returns a string width', () => {
  const a = width({ width: 'auto' })
  expect(a).toEqual( [{ width: 'auto' }])
})


test('returns an array of style objects', () => {
  const styles = space({
    m: '4px',
  })
  expect(styles).toEqual( [{ margin: '4px' }])
})

test('returns 0 values', () => {
  const styles = space({ m: 0 })
  expect(styles).toEqual( [{ margin: 0 }])
})

test('returns negative pixel values', () => {
  const styles = space({ m: -2 })
  expect(styles).toEqual(  [{ margin: '-8px' }])
})


test('returns negative em values', ()=> {
  const styles = space({ m: '-16em' })
  expect(styles).toEqual( [{ margin: '-16em' }])
})

test('returns negative theme values', () => {
  const styles = space({
    theme: {
      space: [0, 4, 8],
    },
    m: -2,
  })
  expect(styles).toEqual([{ margin: '-8px' }])
})

test('returns positive theme values', () => {
  const styles = space({
    theme: {
      space: [0, '1em', '2em'],
    },
    m: 2,
  })
  expect(styles).toEqual( [{ margin: '2em' }])
})

test('returns responsive values',() => {
  type spaceFn=typeof space
  const spaceWithTheme=combineStyles<spaceFn[],{},{media:string[]}>(space)
  const styles = spaceWithTheme({
    m: [0, 2, 3],
    theme:{media:['screen and (min-width: 40em)','screen and (min-width: 52em)']}
  })
  expect(styles).toEqual([
    [
      { margin: 0 },
      { '@media screen and (min-width: 40em)': { margin: '8px' } },
      { '@media screen and (min-width: 52em)': { margin: '16px' } },
    ],
  ])
})

test('returns aliased values', () => {
  const styles = space({
    px: 2,
  })

  expect(styles).toEqual( [ { paddingLeft: '2px', paddingRight: '2px' } ])
})

test('returns string values from theme', () => {
  const styles = space({
    theme: {
      space: [0, '1em'],
    },
    padding: 1,
  })
  expect(styles).toEqual(  [{ padding: '1em' }])
})


test('returns negative string values from theme', () => {
  const styles = space({
    theme: {
      space: [0, '1em'],
    },
    margin: -1,
  })
  expect(styles).toEqual( [{ margin: '-1em' }])
})

test('returns values from theme object', () => {
  const styles = space({
    theme: {
      space: { sm: 1 },
    },
    margin: 'sm',
  })

  expect(styles).toEqual( [{ margin: '1px' }])
})

test('pl prop sets paddingLeft',() => {
  const styles = space({ pl: 2 })
  expect(styles).toEqual( [{ paddingLeft: '8px' }])
})

test('pl prop sets paddingLeft 0', () => {
  const styles = space({ pl: 0 })
  expect(styles).toEqual( [{ paddingLeft: 0 }])
})

test.skip('px prop overrides pl prop', t => {
  const styles = space({
    pl: 1,
    px: 2,
  })

  // [ { paddingLeft: '2px', paddingRight: '2px' },
  // { paddingLeft: '4px' } ]
  expect(styles).toEqual([{ paddingLeft: '1px' }, { paddingRight: '2px' }])
})

test('size returns width and height', () => {
  const styles = size({
    size: 4,
  })

  expect(styles).toEqual( [ { height: '4px', width: '4px' } ])
})

// grid
test('gridGap returns a scalar style', () => {
  const a = gridGap({
    theme: {
      space: [0, 2, 4, 8],
    },
    gap: 3,
  })

  expect(a).toEqual([{ gap: '8px' }])
})

test('gridRowGap returns a scalar style', () => {
  const a = gridRowGap({
    theme: {
      space: [0, 2, 4, 8],
    },
    rowGap: 3,
  })

  expect(a).toEqual([ { rowGap: '8px' }])
})

test('borders prop returns correct sequence', () => {
  const a = borders({
    borderBottom: '1px solid',
    borderWidth: '2px',
    borderStyle: 'dashed',
    borderColor: 'red',
  })
  expect(a).toEqual([
    { borderBottom: '1px solid' },
    { borderWidth: '2px' },
    { borderStyle: 'dashed' },
    { borderColor: 'red' },
  ])
})
