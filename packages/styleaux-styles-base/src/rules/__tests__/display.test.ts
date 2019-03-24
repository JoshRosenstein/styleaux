import {display} from '../display'

const cssProp='display'

const testName=(fn:string)=>`%s--${fn}(input:%p, props:%p)`
const basicInputdata = [
  ["true", true, {}, "initial"],
  ["false", false, {}, "none"],
  ["block", 'block', {}, "block"],
  ["flex", 'flex', {}, "flex"],
]

test.each(basicInputdata)(testName(cssProp), (_name: string, input, props: {},expected:any) =>{

  expect(display(input,{props})).toEqual({[cssProp]:expected})


})

