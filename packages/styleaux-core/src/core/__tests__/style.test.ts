import {style} from '../style'
import {toStyles} from '../../__testutils__'



describe('style Tests', () => {
  type Media={sm:string,md:string}
const media:Media={
  sm: 'screen and (min-width: 40em)',
  md:'screen and (min-width: 52em)'
}
  const width = style<{width: number | string},Media>({
    prop: 'width',
  })

  const color = style<{color: string},Media>({
    prop: 'color',
    key: 'colors',
  })

  const backgroundColor = style<{backgroundColor: string; bg: string},Media>({
    prop: 'backgroundColor',
    alias: 'bg',
    key: 'colors',
  })

  const theme = {
    media,
    colors: {
      blue: '#07c',
      black: '#111',
    },
  }

  const themeArr = {
    media: ['screen and (min-width: 40em)','screen and (min-width: 52em)'],
    colors: {
      blue: '#07c',
      black: '#111',
    },
  }
  test('returns values from theme', () => {
    const style = color({theme, color: 'blue'})
    expect(toStyles(style)).toEqual(
      {
        color: '#07c',
      },
    )
  })

  test('handles aliased props', () => {
    const style = backgroundColor({
      theme,
      bg: 'blue',
    })

    expect(toStyles(style)).toEqual(
      {
        backgroundColor: '#07c',
      },
    )
  })

  test('returns 0', () => {
    const style = width({width: 0})

    expect(toStyles(style)).toEqual({width: 0})
  })

  test('returns responsive style objects', () => {
    const style = width({
      theme,
      width: {all: '100%', sm: '50%'},
    })

    expect(toStyles(style)).toEqual({
      width: '100%',
      '@media screen and (min-width: 40em)': {width: '50%'},
    })
  })

  test('returns responsive style objects from array with media as array', () => {
    const style = width({
      theme:themeArr,
      width: ['100%','50%'],
    })

    expect(toStyles(style)).toEqual({
      width: '100%',
      '@media screen and (min-width: 40em)': {width: '50%'},
    })
  })

  test('returns responsive style objects from array with media as object', () => {
    const style = width({
      theme,
      width: ['100%','50%'],
    })

    expect(toStyles(style)).toEqual({
      width: '100%',
      '@media screen and (min-width: 40em)': {width: '50%'},
    })
  })


  test('skips undefined responsive values', () => {
    const style = width({
      theme,
      width: ['100%', , '50%'],
    })

    expect(toStyles(style)).toEqual({
      width: '100%',
      '@media screen and (min-width: 52em)': {width: '50%'},
    })


  })

})
describe('Basiscs', () => {
  const margin=style<{margin:string | number}>({
    prop: 'margin',
    cssProp: 'margin',
    transformValue: n => n + 'px',
    key: 'space',
  }
  )


test('looksup from array Theme', () => {
  const style=margin({margin: 1, theme: {space: [0, 11, 22, 33, 44]}})

  expect(style).toEqual([{margin: '11px'}])
})
test('looksup from array Theme with Negative', () => {
  const style = margin({margin: -1, theme: {space: [0, 11, 22, 33, 44]}})

  expect(style).toEqual([{margin: '-11px'}])
})

test('looksup from Object Theme', () => {
  const style = margin({margin: 'sm', theme: {space: {sm: 11}}})

  expect(style).toEqual([{margin: '11px'}])
})

test('looksup from Object Theme with negative', () => {
  const style = margin({margin: '-sm', theme: {space: {sm: 11}}})

  expect(style).toEqual([{margin: '-11px'}])
})

test('uses input if not themeKey', () => {
  const style = margin({margin: 20})

  expect(style).toEqual([{margin: '20px'}])
})})

