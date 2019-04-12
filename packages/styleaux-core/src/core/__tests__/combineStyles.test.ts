import { createStyles } from '../createStyles'
import { combineStyles } from '../combineStyles'
import { Arg1, DeepSimplify } from '../../types'
import { StyleProps } from '../'

const media = {
  small: '@media (min-width: 30em)',
  medium: '@media (min-width: 40em)',
  large: '@media (min-width: 50em)',
}

const theme = {
  media,
  space: {
    all: [0, 10, 20, 30, 60],
    M: [0, 5, 10, 20, 20],
  },
  myValue: 100,
}
// type ITheme= typeof theme
// type IMedia=typeof media

type Style1Props = { h: boolean }
const style1 = createStyles<Style1Props>({ h: { height: '100vh' } })

//type IStyles1Arg = DeepSimplify<Arg1<typeof style1>>

type Style2Props = { w?: number | string }
const style2 = createStyles<Style2Props>({ w: (input) => ({ width: input }) })


type Style3Props = { size: number | string }

const style3 = createStyles<Style3Props>({
  size: [
    (input) => ({ width: input }),
    (input) => ({ height: input }),
  ],
})
const styles = combineStyles<StyleProps<Style1Props, Style2Props, Style3Props>>(style1, style2, style3)

type IStylesArg = DeepSimplify<Arg1<typeof styles>>
type TestTuple = Array<[string, IStylesArg, any]>
const THEME = theme

describe('basics', () => {
  const basicData: TestTuple = [
    ['boolean height', { h: true }, [{ height: '100vh' }]],
    ['width px', { w: '10px' }, [{ width: '10px' }]],
    [
      'w px & bool h',
      { w: '10px', h: true },
      [{ height: '100vh' }, { width: '10px' }],
    ],
  ]

  test.each(basicData)(
    '%s',
    (_testName: string, props, expected, theme: any = THEME) => {
      //expect(theme).toEqual( THEME);
      expect(styles({ theme, ...props })).toEqual(expected)
    },
  )
})

describe('responsive', () => {
  const data: TestTuple = [
    [
      'boolean height ',
      { h: { medium: true } },
      [{ '@media (min-width: 40em)': { height: '100vh' } }],
    ],
    [
      'width px',
      { w: { medium: '10px' } },
      [{ '@media (min-width: 40em)': { width: '10px' } }],
    ],
    [
      'w px & bool h',
      { w: { medium: '10px' }, h: { medium: true } },
      [
        { '@media (min-width: 40em)': { height: '100vh' } },
        { '@media (min-width: 40em)': { width: '10px' } },
      ],
    ],
  ]

  test.each(data)(
    '%s',
    (_testName: string, props: any, expected: any, theme: any = THEME) => {
      //expect(theme).toEqual( THEME);
      expect(styles({ theme, ...props })).toEqual(expected)
    },
  )
})

describe('Misc', () => {
  const data: TestTuple = [
    [
      'Can handle Array of Functions',
      { size: { medium: '10px' } },
      [
        { '@media (min-width: 40em)': { width: '10px' } },
        { '@media (min-width: 40em)': { height: '10px' } },
      ],
    ],
  ]

  test.each(data)(
    '%s',
    (_testName: string, props: any, expected: any, theme: any = THEME) => {
      expect(styles({ theme, ...props })).toEqual(expected)
    },
  )
})
