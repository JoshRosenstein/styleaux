import {createAsResponsive, color} from '../../'
import {CreateAssistant} from '@styleaux/core'
import baseDefaultTheme from './__fixtures__/baseDefaultTheme'

const colors = {
  red: '#f5222d',
  vermilion: '#fa541c',
  orange: '#fa8c16',
  amber: '#faad14',
  yellow: '#fadb14',
  lime: '#a0d911',
  green: '#52c41a',
  teal: '#13c2c2',
  blue: '#1890ff',
  indigo: '#2f54eb',
  violet: '#5141DE',
  purple: '#722ed1',
  magenta: '#eb2f96',
  slate: '#6f9cb3',
  dusk: '#7781a6',
  blueGray: '#aeb9cb',
  lightGray: '#bfbfbf',
  gray: '#808080',
  darkGray: '#404040',
  nuetral: '#97a4a4',
}

const config = {defaultTheme: {...baseDefaultTheme, colors}}
const {responsiveProp} = CreateAssistant(config)

const asResponsive = createAsResponsive(responsiveProp)

export const textColor = {
  prop: 'color',
  path: 'colors',
}

export const bgColor = {
  prop: 'bg',
  cssProp: 'backgroundColor',
  path: 'colors',
}

const responsiveColor = asResponsive(color)

describe('Basics', () => {
  it('Empty Props', () => {
    expect(responsiveColor({})).toEqual({})
  })

  it('With Bg', () => {
    expect(responsiveColor({bg: 'red'})).toEqual({
      backgroundColor: colors.red,
    })
  })

  it('is Responsive Bg', () => {
    expect(responsiveColor({bg: ['red', 'nuetral', 'notInThemeBlue']})).toEqual(
      {
        '@media screen and (min-width:1BP_Test)': {
          backgroundColor: colors.nuetral,
        },
        '@media screen and (min-width:2BP_Test)': {
          backgroundColor: 'notInThemeBlue',
        },
        backgroundColor: colors.red,
      },
    )
  })

  it('it looks Up themeProp', () => {
    expect(
      responsiveColor({
        bg: ['redColor', 'whiteColor', 'blueColor'],
        theme: {colors: {redColor: 'redColorFromTheme'}},
      }),
    ).toEqual({
      '@media screen and (min-width:1BP_Test)': {backgroundColor: 'whiteColor'},
      '@media screen and (min-width:2BP_Test)': {backgroundColor: 'blueColor'},
      backgroundColor: 'redColorFromTheme',
    })
  })

  it('it looks Up from default theme', () => {
    expect(
      responsiveColor({
        color: ['red', 'whiteColor', 'blueColor'],
        theme: {colors: {redColor: 'redColorFromTheme'}},
      }),
    ).toEqual({
      '@media screen and (min-width:1BP_Test)': {color: 'whiteColor'},
      '@media screen and (min-width:2BP_Test)': {color: 'blueColor'},
      color: colors.red,
    })
  })
})