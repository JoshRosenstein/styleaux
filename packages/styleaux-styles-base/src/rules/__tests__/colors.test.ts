import {backgroundColor,color} from '../colors'
// import {Arg1,DeepRequired} from '@styleaux/core/dist-src/types'
// import {assertTrue, Equals} from 'typescript-test-utils'

const testName=(fn:string)=>`%s--${fn}(input:%p, props:%p)`
const basicInputdata = [
  ["black", 'black', {}, "black"],
  ["blue", 'blue', {}, "blue"],
]

test.each(basicInputdata)(testName('backgroundColor'), (_name: string, input, props: {},expected:any) =>{

  expect(backgroundColor(input,{props})).toEqual({['backgroundColor']:expected})


})

test.each(basicInputdata)(testName('color'), (_name: string, input, props: {},expected:any) =>{

  expect(color(input,{props})).toEqual({['color']:expected})


})

test('types',()=>{
  //@ts-ignore
  const terros= color(0,{})


})


// type Media = {M: string; T: string}

// it('with no theme or media', () => {
//   const fn=(input)=>color(input,{})
//  type FnType=typeof color

//   const style = createStyles(styleConfig)
//   type Result = DeepRequired<Arg1<typeof style>>
//   type Expected = {margin: string, theme:any}

//   assertTrue<Equals<Result, Expected>>()
// })


// it('with media', () => {
//   type InputType=string | number

//   const styleConfig = {
//     margin: (input: InputType) => ({margin: input}),
//   }

//   const style = createStyles<typeof styleConfig, Media>(styleConfig)
//   type Result = DeepRequired<Arg1<typeof style>>
//   type Expected = {
//     margin: InputType | {M: InputType; T: InputType; all: InputType}
//     theme: never
//   }

//   assertTrue<Equals<Result, Expected>>()
// })
