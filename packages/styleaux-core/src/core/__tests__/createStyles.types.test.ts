
import {createStyles2} from '../createStyles2'
import {combineStyles2} from '../combineStyles2'

import {rule} from '../rule'
import {Arg1,DeepSimplify,DeepRequired} from '../../types'
import {ResponsiveProp,OmitTheme} from '../types'
import {assertTrue, Equals, assertFalse} from 'typescript-test-utils'

type Media = {M: string; T: string}


it('createStyles with no theme or media', () => {

  const style = createStyles2<{margin:string}>({
    margin: (input: string) => ({margin: input}),
  })

  type Result = DeepRequired<Arg1<typeof style>>
  type Expected = {margin: string}

  assertTrue<Equals<Result, Expected>>()
})


it('createStyles with media', () => {
  type InputType=string | number

type StyleProps= {margin:ResponsiveProp<InputType,Media>}

  const style = createStyles2<StyleProps>({
    margin: (input: InputType) => ({margin: input}),
  })

  type Resultt = DeepRequired<Arg1<typeof style>>
  type Expected = DeepRequired<{
    margin: InputType | {M: InputType; T: InputType; all: InputType} | Array<InputType | undefined>
  }>

  assertTrue<Equals<Resultt, Expected>>()
})

it('Wrapped with combinestyles', () => {

  type StyleProps= {margin:ResponsiveProp<string,Media>}

  const style = createStyles2<StyleProps>({
    margin: (input: string) => ({margin: input}),
  })
  const styleWrapped = combineStyles2<StyleProps>(style)

  type Expected=DeepSimplify<{
    margin:ResponsiveProp<string,Media>
  }>

  type Style=typeof style
  type StyleWrapped=typeof styleWrapped


  type StyleResult = DeepSimplify<Arg1<Style>>

  type StyleWrappedResult = DeepSimplify<Arg1<StyleWrapped>>

  assertTrue<Equals<StyleResult, Expected>>()
  assertTrue<Equals<StyleResult, StyleWrappedResult>>()
})

it('Can Overwrite theme and media with combinestyles', () => {

  type StyleProps= {margin:ResponsiveProp<string,Media>}

type OverideMedia={tablet:string}
type StylePropsOveride= {margin:ResponsiveProp<string,OverideMedia>}

  const styleConfig = {
    'margin': (input: string) => ({margin: input}),
  }
  const style = createStyles2<StyleProps>(styleConfig)
  type Style=typeof style

  const styleWrapped = combineStyles2<StylePropsOveride>(style)

  type Expected=DeepRequired<{
    'margin':ResponsiveProp<string,{tablet:string}>

  }>


  type StyleWrapped=typeof styleWrapped


  type StyleResult = DeepRequired<Arg1<Style>>

  type StyleWrappedResult = DeepRequired<Arg1<StyleWrapped>>

  assertTrue<Equals<StyleWrappedResult, Expected>>()
  assertFalse<Equals<StyleResult, StyleWrappedResult>>()
})


it('Wrapped with combinestyles as rule', () => {
  type StyleProps= {margin:ResponsiveProp<string,Media>}


  const style = createStyles2<StyleProps>({
    'margin':rule('margin'),
  })

  const styleWrapped = combineStyles2<StyleProps>(style)

  type Expected=DeepRequired<{
    'margin':ResponsiveProp<string,Media>,
  }>

  type Style=typeof style
  type StyleWrapped=typeof styleWrapped


  type StyleResult = DeepRequired<Arg1<Style>>

  type StyleWrappedResult = DeepRequired<Arg1<StyleWrapped>>

  assertTrue<Equals<StyleResult, Expected>>()
  assertTrue<Equals<StyleResult, StyleWrappedResult>>()
})

it('Debug', () => {
  // const position = createStyles({ position: rule<string>('position') })
  // type PositionArg=DeepRequired<Arg1<typeof position>>
  type StyleProps= {position:ResponsiveProp<string,Media>}

  type StyleProps2= {margin:ResponsiveProp<string,Media>}

  const styleConfig = { position: rule('position') }

  const styleConfig2 = {
    margin:rule('margin'),
  }
  //const position = createStyles({ position: rule<string>('position') })

  const style = createStyles2<StyleProps>(styleConfig)
   const style2 = createStyles2<StyleProps2>(styleConfig2)
  const styleWrapped = combineStyles2<StyleProps&StyleProps2 >(style,style2)

  type Expected=DeepRequired<{
    position:ResponsiveProp<string,Media>,
    margin:ResponsiveProp<string,Media>,
  }>

  type Style=typeof style
  type StyleWrapped=typeof styleWrapped

  //type StyleWrappedProps=DeepRequired<StyleWrapped['_styleProps']>

  type StyleResult =DeepRequired<Arg1<Style> & Arg1<typeof style2>>

  type StyleWrappedResult = DeepRequired<Arg1<StyleWrapped>>

  assertTrue<Equals<StyleResult, Expected>>()
  assertTrue<Equals<StyleResult, StyleWrappedResult>>()
})

it('combineStyles withing combineStyles', () => {


  const position = createStyles2<{position:string}>({ position: rule('position') })
   const textColor  = createStyles2<{color:string}>( {color:rule('color')})
   const backgroundColor =createStyles2<{bg:string}>({bg:rule('backgroundColor')})
   const color  =combineStyles2<{color:string,bg:string}>(textColor,backgroundColor)

   const style=  combineStyles2<{color:string,bg:string,position:string}>(color,position)

  type Style=typeof style

  type StyleProps = DeepRequired<OmitTheme<Arg1<Style> >>


type Expected={
  color:string,
  position:string,
  bg:string
}

  assertTrue<Equals<StyleProps, Expected>>()

})
