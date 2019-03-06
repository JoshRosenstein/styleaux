import {matchBlockArr} from '../matchBlockArr'
import {path} from '@roseys/futils'

const defaultTheme = {
  space: {sm: 8},
}
describe('matchBlockP', () => {
  const basic = {
    color: 'blue',
    fontSize: 2,
  }
  const canReturnArray = size => [
    {height: `${path(['space', size], defaultTheme)}px`},
  ]
  const funcOuterAndInner = c => ({
    color: props => path(['colors', c])(props) || c,
  })
  // const ArrayWithFuncs = bg => [
  //   {backgroundColor: bg},
  //   switchProp(
  //     {
  //       secondary: v => v,
  //       default: 'defaultValue',
  //     },
  //     {
  //       cssProp: 'marginTop',
  //       transform: true,
  //       responsive: true,
  //     },
  //   ),
  //   {color: 'yellow'},
  // ]

  const switchConfig = [
    ['basic', basic],
    ['canReturnArray', canReturnArray],
    ['color', funcOuterAndInner],
  ]

  test('Basic', () => {
    const switchConfig = [
      [
        'basic',
        {
          color: 'blue',
          fontSize: 2,
        },
      ],
      [
        'unknownProp',
        {
          color: 'red',
          fontSize: 8,
        },
      ],
    ]

    const props = {
      basic: true,
    }
    const res = {color: 'blue', fontSize: 2}

    expect(matchBlockArr(switchConfig)(props)).toEqual(res)
  })

  test('canReturn Single Array', () => {
    const props = {
      canReturnArray: 'sm',
    }
    const res = {height: '8px'}

    expect(matchBlockArr(switchConfig)(props)).toEqual(res)
  })
})
