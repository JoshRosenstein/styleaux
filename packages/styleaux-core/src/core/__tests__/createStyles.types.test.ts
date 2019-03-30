import {createStyles} from '../createStyles'
import {combineStyles} from '../combineStyles'
import {rule} from '../rule'
import {Arg1,DeepSimplify,DeepRequired} from '../../types'
import {ResponsiveProp,OmitTheme} from '../types'
import {assertTrue, Equals, assertFalse} from 'typescript-test-utils'

type Media = {M: string; T: string}


it('createStyles with no theme or media', () => {
  const styleConfig = {
    margin: (input: string) => ({margin: input}),
  }
  const style = createStyles(styleConfig)
  type Result = DeepRequired<Arg1<typeof style>>
  type Expected = {margin: string, theme:any}

  assertTrue<Equals<Result, Expected>>()
})


it('createStyles with media', () => {
  type InputType=string | number

  const styleConfig = {
    margin: (input: InputType) => ({margin: input}),
  }

  const style = createStyles<typeof styleConfig, Media>(styleConfig)
  type Resultt = DeepRequired<Arg1<typeof style>>
  type Expected = DeepRequired<{
    margin: InputType | {M: InputType; T: InputType; all: InputType} | Array<InputType | undefined>
    theme:any
  }>

  assertTrue<Equals<Resultt, Expected>>()
})

it('Wrapped with combinestyles', () => {



  const styleConfig = {
    'margin': (input: string) => ({margin: input}),
  }
  const style = createStyles<typeof styleConfig,Media>(styleConfig)
  const styleWrapped = combineStyles(style)

  type Expected=DeepSimplify<{
    'margin'?:ResponsiveProp<string,Media>
theme?:any
  }>

  type Style=typeof style
  type StyleWrapped=typeof styleWrapped


  type StyleResult = DeepSimplify<Arg1<Style>>

  type StyleWrappedResult = DeepSimplify<Arg1<StyleWrapped>>

  assertTrue<Equals<StyleResult, Expected>>()
  assertTrue<Equals<StyleResult, StyleWrappedResult>>()
})

it('Can Overwrite theme and media with combinestyles', () => {

type OverideMedia={tablet:string}
type Theme={color:{red:string}}

  const styleConfig = {
    'margin': (input: string) => ({margin: input}),
  }
  const style = createStyles<typeof styleConfig,Media>(styleConfig)
  type Style=typeof style

  const styleWrapped = combineStyles<Style[],OverideMedia,Theme>(style)

  type Expected=DeepRequired<{
    'margin':ResponsiveProp<string,{tablet:string}>
theme:Theme & {media:OverideMedia}
  }>


  type StyleWrapped=typeof styleWrapped


  type StyleResult = DeepRequired<Arg1<Style>>

  type StyleWrappedResult = DeepRequired<Arg1<StyleWrapped>>

  assertTrue<Equals<StyleWrappedResult, Expected>>()
  assertFalse<Equals<StyleResult, StyleWrappedResult>>()
})


it('Wrapped with combinestyles as rule', () => {

  const styleConfig = {
    'margin':rule<string>('margin'),
  }
  const style = createStyles<typeof styleConfig,Media>(styleConfig)
  const styleWrapped = combineStyles(style)

  type Expected=DeepRequired<{
    'margin':ResponsiveProp<string,Media>,
    theme:any
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

  const styleConfig = { position: rule<string>('position') }

  const styleConfig2 = {
    margin:rule<string>('margin'),
  }
  //const position = createStyles({ position: rule<string>('position') })

  const style = createStyles(styleConfig)
   const style2 = createStyles(styleConfig2)
  const styleWrapped = combineStyles(style,style2)

  type Expected=DeepRequired<{
    position:ResponsiveProp<string>,
    margin:ResponsiveProp<string>,
    theme?:any

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
  const position = createStyles({ position: rule<string>('position') })

   const textColor  = createStyles( {color:rule<string>('color')})
   const backgroundColor =createStyles({bg:rule<string>('backgroundColor')})
   const color  =combineStyles(textColor,backgroundColor)

   const style=  combineStyles(color,position)

  type Style=typeof style

  type StyleProps = DeepRequired<OmitTheme<Arg1<Style> >>
  type StyleProps2 = DeepRequired<Style['_styleProps']>

type Expected={
  color:string,
  position:string,
  bg:string
}

  assertTrue<Equals<StyleProps, StyleProps2>>()
  assertTrue<Equals<StyleProps, Expected>>()

})
