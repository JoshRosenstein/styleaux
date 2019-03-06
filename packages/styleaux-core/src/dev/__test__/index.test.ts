import {
  style,
  getTheme,
  transformStyleP,
  responsive,
  getDefaultTheme,
} from './__fixtures__/aux'
import {theme} from './__fixtures__/theme'

describe(' Basic responsiveProp', () => {
  it('getTheme', () => {
    const t = getTheme('space.sm')({})

    expect(t).toEqual(theme.space.sm)
  })

  it('transformStyle', () => {
    const t = transformStyleP({
      path: 'space',
      cssProp: 'margin',
      value: 'sm',
    })({})

    const e = {margin: 8}

    expect(t).toEqual(e)
  })
  it('responsive Works', () => {
    const t = responsive({
      value: 'sm',
      cssProp: 'margin',
      transformer: v => getDefaultTheme(['space', v]),
    })

    const e = {margin: 8}

    expect(t).toEqual(e)
  })

  it('Works', () => {
    const t = style({
      transform: true,
      path: 'space',
      cssProp: 'margin',
      prop: 'm',
    })({m: {default: 'sm', sm: 'md'}})

    const e = {'@media screen and (min-width:37.5em)': {margin: 16}, margin: 8}

    expect(t).toEqual(e)
  })
})
