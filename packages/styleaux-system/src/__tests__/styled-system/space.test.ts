import {createAsResponsive, space as spaceDef} from '../../'
import {CreateAssistant} from '@styleaux/core'
import baseDefaultTheme from './__fixtures__/baseDefaultTheme'
import breakpoints from './__fixtures__/breakpoints'
import {OPTIONSKEYS as TRANSFORMOPTIONKEYS} from '@styleaux/core/dist/transformStyle'

const breakpointsKeys = Object.keys(breakpoints)

const space = {
  none: 0,
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 32,
  xl: 64,
  xxl: 128,
}

const spacePX = Object.keys(space).reduce(
  (acc, key) => ({...acc, [key]: space[key] + 'px'}),
  {},
) as {[P in keyof typeof space]: 'string'}
const config = {
  defaultTheme: {...baseDefaultTheme, space},
  [TRANSFORMOPTIONKEYS.defaultLookup]: true,
  [TRANSFORMOPTIONKEYS.defaultTransform]: true,
}
const {responsiveProp} = CreateAssistant(config)

const asResponsive = createAsResponsive(responsiveProp)

const responsiveSpace = asResponsive(spaceDef)

describe('Basics', () => {
  it('Empty Props', () => {
    expect(responsiveSpace({})).toEqual({})
  })

  it('With pl', () => {
    expect(responsiveSpace({pl: '2px'})).toEqual({
      paddingLeft: '2px',
    })
  })
  it('With pl lookup from default theme', () => {
    expect(responsiveSpace({pl: 'md'})).toEqual({
      paddingLeft: '16px',
    })
  })

  it('is Responsive mt as Array', () => {
    expect(responsiveSpace({mt: ['sm', 'md', 'lg']})).toEqual({
      '@media screen and (min-width:1BP_Test)': {
        marginTop: spacePX.md,
      },
      '@media screen and (min-width:2BP_Test)': {
        marginTop: spacePX.lg,
      },
      marginTop: spacePX.sm,
    })
  })

  it('is Responsive mt as Object', () => {
    expect(
      responsiveSpace({
        mt: {
          default: 'sm',
          mobile: 'md',
          tablet: 'lg',
        },
      }),
    ).toEqual({
      '@media screen and (min-width:1BP_Test)': {
        marginTop: spacePX.md,
      },
      '@media screen and (min-width:2BP_Test)': {
        marginTop: spacePX.lg,
      },
      marginTop: spacePX.sm,
    })
  })

  it('skips Responsive undefined', () => {
    expect(responsiveSpace({mt: ['sm', , 'lg']})).toEqual({
      '@media screen and (min-width:2BP_Test)': {
        marginTop: spacePX.lg,
      },
      marginTop: spacePX.sm,
    })
  })

  it('adds px', () => {
    expect(responsiveSpace({pt: 1, pb: 2})).toEqual({
      paddingBottom: '2px',
      paddingTop: '1px',
    })
  })
})
