import {createStyles} from '../createStyles'
import {Arg1,DeepRequired} from '../../types'
import {assertTrue, Equals} from 'typescript-test-utils'

type Media = {M: string; T: string}

it('with no theme or media', () => {
  const styleConfig = {
    margin: (input: string) => ({margin: input}),
  }
  const style = createStyles(styleConfig)
  type Result = DeepRequired<Arg1<typeof style>>
  type Expected = {margin: string, theme:any}

  assertTrue<Equals<Result, Expected>>()
})


it('with media', () => {
  type InputType=string | number

  const styleConfig = {
    margin: (input: InputType) => ({margin: input}),
  }

  const style = createStyles<typeof styleConfig, Media>(styleConfig)
  type Result = DeepRequired<Arg1<typeof style>>
  type Expected = {
    margin: InputType | {M: InputType; T: InputType; all: InputType}
    theme: never
  }

  assertTrue<Equals<Result, Expected>>()
})
