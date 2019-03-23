import * as boxAlignmentRules from '../boxAlignment'
const Fns= Object.entries(boxAlignmentRules)
const testName=(fn:string)=>`%s--${fn}(input:%p, props:%p)`

const basicInputdata = [
  ["with someValue", "someValue", {}, "someValue"],

]

describe.each(Fns)('%s',(rule:string,fn)=>{

  test.each(basicInputdata)(testName(rule), (_name: string, input: string, props: {},expected:any) =>{

    expect(fn(input,{props})).toEqual({[rule]:expected})


  })

})








