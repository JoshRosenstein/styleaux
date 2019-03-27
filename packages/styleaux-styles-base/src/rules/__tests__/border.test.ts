import {
  borderRule,
  borderBottomRule,
  borderTopRule,
  borderLeftRule,
  borderRightRule,
  borderXRule,
  borderYRule,
  borderColorRule,
} from '../border'

import {IMedia} from '../../__testutils__/theme'
const testName = (fn: string) => `%s--${fn}(input:%p, props:%p)`

const basicInputdata:Array<[string,string | 0,any,any]> = [
  ['with number 0', 0, {}, 0],
  ['with String', '5px solid red', {}, '5px solid red'],
]

const Fns = Object.entries({
  borderRule,
  borderBottomRule,
  borderTopRule,
  borderLeftRule,
  borderRightRule,
})

describe.each(Fns)('%s', (rule: string, fn) => {
  test.each(basicInputdata)(
    testName(rule),
    (_name: string, input: string | 0, props: {}, expected: any) => {
      expect(fn(input, {props})).toEqual({[rule.replace('Rule','')]: expected})
    },
  )
})

test.each(basicInputdata)(
  testName('borderX'),
  (_name: string, input: string | 0, props: {}, expected: any) => {
    expect(borderXRule.map(fn => fn(input, {props}))).toEqual([
      {borderLeft: expected},
      {borderRight: expected},
    ])
  },
)

test.each(basicInputdata)(
  testName('borderY'),
  (_name: string, input: string | 0, props: {}, expected: any) => {
    expect(borderYRule.map(fn => fn(input, {props}))).toEqual([
      {borderTop: expected},
      {borderBottom: expected},
    ])
  },
)


test("BorderColor",()=>{
  expect(borderColorRule('red',{})).toEqual({borderColor:'red'})

  expect(borderColorRule<IMedia>({M:'red'},{theme:{media:{M:'(max-width: 600px)'}}},'M')).toEqual(
    {'@media (max-width: 600px)':{borderColor:'red'}})

  })
