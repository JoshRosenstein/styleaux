import {
  border,
  borderBottom,
  borderTop,
  borderLeft,
  borderRight,
  borderX,
  borderY,
  borderColor,
} from '../border'

import {THEME,IMedia} from '../../__testutils__/theme'
const testName = (fn: string) => `%s--${fn}(input:%p, props:%p)`

const basicInputdata:Array<[string,string | 0,any,any]> = [
  ['with number 0', 0, {}, 0],
  ['with String', '5px solid red', {}, '5px solid red'],
]

const Fns = Object.entries({
  border,
  borderBottom,
  borderTop,
  borderLeft,
  borderRight,
})

describe.each(Fns)('%s', (rule: string, fn) => {
  test.each(basicInputdata)(
    testName(rule),
    (_name: string, input: string | 0, props: {}, expected: any) => {
      expect(fn(input, {props})).toEqual({[rule]: expected})
    },
  )
})

test.each(basicInputdata)(
  testName('borderX'),
  (_name: string, input: string | 0, props: {}, expected: any) => {
    expect(borderX.map(fn => fn(input, {props}))).toEqual([
      {borderLeft: expected},
      {borderRight: expected},
    ])
  },
)

test.each(basicInputdata)(
  testName('borderY'),
  (_name: string, input: string | 0, props: {}, expected: any) => {
    expect(borderY.map(fn => fn(input, {props}))).toEqual([
      {borderTop: expected},
      {borderBottom: expected},
    ])
  },
)


test("BorderColor",()=>{
  expect(borderColor('red',{})).toEqual({borderColor:'red'})

  expect(borderColor<IMedia>({M:'red'},{theme:{media:{M:'(max-width: 600px)'}}},'M')).toEqual(
    {'@media (max-width: 600px)':{borderColor:'red'}})

  })
