import {createStyles} from '../createStyles'
import {combineStyles} from '../combineStyles'
import {rule} from '../rule'
import {Arg1,DeepRequired} from '../../types'
import {ResponsiveProp} from '../types'
import {assertTrue, Equals} from 'typescript-test-utils'

type Media = {M: string; T: string}


it('createStyles with no theme or media', () => {
  const styleConfig = {
    margin: (input: string) => ({margin: input}),
  }
  const style = createStyles(styleConfig)
  type Result = DeepRequired<Arg1<typeof style>>
  type Expected = {margin: string | {all:string}, theme:any}

  assertTrue<Equals<Result, Expected>>()
})


it('createStyles with media', () => {
  type InputType=string | number

  const styleConfig = {
    margin: (input: InputType) => ({margin: input}),
  }

  const style = createStyles<typeof styleConfig, Media>(styleConfig)
  type Result = DeepRequired<Arg1<typeof style>>
  type Expected = {
    margin: InputType | {M: InputType; T: InputType; all: InputType}
  }

  assertTrue<Equals<Result, Expected>>()
})

it('Wrapped with combinestyles', () => {



  const styleConfig = {
    'margin': (input: string) => ({margin: input}),
  }
  const style = createStyles<typeof styleConfig,Media>(styleConfig)
  const styleWrapped = combineStyles(style)

  type Expected=DeepRequired<{
    'margin':ResponsiveProp<string,Media>


  }>

  type Style=typeof style
  type StyleWrapped=typeof styleWrapped


  type StyleResult = DeepRequired<Arg1<Style>>

  type StyleWrappedResult = DeepRequired<Arg1<StyleWrapped>>

  assertTrue<Equals<StyleResult, Expected>>()
  assertTrue<Equals<StyleResult, StyleWrappedResult>>()
})

it('Wrapped with combinestyles as rule', () => {

  const styleConfig = {
    'margin':rule<string>('margin'),
  }
  const style = createStyles<typeof styleConfig,Media>(styleConfig)
  const styleWrapped = combineStyles(style)

  type Expected=DeepRequired<{
    'margin':ResponsiveProp<string,Media>
  }>

  type Style=typeof style
  type StyleWrapped=typeof styleWrapped


  type StyleResult = DeepRequired<Arg1<Style>>

  type StyleWrappedResult = DeepRequired<Arg1<StyleWrapped>>

  assertTrue<Equals<StyleResult, Expected>>()
  assertTrue<Equals<StyleResult, StyleWrappedResult>>()
})
