import {createStyles} from '../createStyles'
import {combineStyles} from '../combineStyles'
import {Arg1,DeepSimplify} from '../../types'

const media = {
  small: '@media (min-width: 30em)',
  medium: '@media (min-width: 40em)',
  large: '@media (min-width: 50em)',
}
type Media = typeof media

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
const style1Config = {h: {height: '100vh'}}
const style1 = createStyles<typeof style1Config,Media>(style1Config)

//type IStyles1Arg = DeepSimplify<Arg1<typeof style1>>
const style2Config = {w: (input: number | string) => ({width: input})}

const style2 = createStyles<typeof style2Config,Media>(style2Config)

const style3Config={
  size: [
    (input: number | string) => ({width: input}),
    (input: number | string) => ({height: input}),
  ],
}
const style3 = createStyles<typeof style3Config,Media>(style3Config)
const styles = combineStyles(style1, style2, style3)

type IStylesArg = DeepSimplify<Arg1<typeof styles>>
type TestTuple = Array<[string, IStylesArg, any]>
const THEME = theme

describe('basics', () => {
  const basicData: TestTuple = [
    ['boolean height', {h: true}, [{height: '100vh'}]],
    ['width px', {w: '10px'}, [{width: '10px'}]],
    [
      'w px & bool h',
      {w: '10px', h: true},
      [{height: '100vh'},{width: '10px'}],
    ],
  ]

  test.each(basicData)(
    '%s',
    (_testName: string, props, expected, theme: any = THEME) => {
      //expect(theme).toEqual( THEME);
      expect(styles({theme, ...props})).toEqual(expected)
    },
  )
})

describe('responsive', () => {
  const data: TestTuple = [
    [
      'boolean height ',
      {h: {medium: true}},
      [{'@media @media (min-width: 40em)': {height: '100vh'}}],
    ],
    [
      'width px',
      {w: {medium: '10px'}},
      [{'@media @media (min-width: 40em)': {width: '10px'}}],
    ],
    [
      'w px & bool h',
      {w: {medium: '10px'}, h: {medium: true}},
      [{'@media @media (min-width: 40em)': {height: '100vh'}},
        {'@media @media (min-width: 40em)': {width: '10px'}},

      ],
    ],
  ]

  test.each(data)(
    '%s',
    (_testName: string, props: any, expected: any, theme: any = THEME) => {
      //expect(theme).toEqual( THEME);
      expect(styles({theme, ...props})).toEqual(expected)
    },
  )
})

describe('Misc', () => {
  const data: TestTuple = [
    [
      'Can handle Array of Functions',
      {size: {medium: '10px'}},
      [
        {'@media @media (min-width: 40em)': {width: '10px'}},
        {'@media @media (min-width: 40em)': {height: '10px'}},
      ],
    ],
  ]

  test.each(data)(
    '%s',
    (_testName: string, props: any, expected: any, theme: any = THEME) => {
      expect(styles({theme, ...props})).toEqual(expected)
    },
  )
})

