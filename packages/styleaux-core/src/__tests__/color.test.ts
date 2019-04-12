import * as UT from 'utility-types'
import * as TU from 'typescript-test-utils'
import * as AUX from '../types'
// @ts-ignore
import * as AUXCORE from '../core/types'

import {createColor,ColorProperty} from '../__testutils__/fixtures/color'
// @ts-ignore
import {theme,Media, Theme} from '../__testutils__/fixtures/theme'

type DeepRequiredEquals<A,B>=TU.Equals<UT.DeepRequired<A>, UT.DeepRequired<B>>


test('A',()=>{
const style=createColor()
type styleProps= AUX.DeepSimplify< AUX.Arg1<typeof style>>
type ExpectedStyleProps= {
  color?: ColorProperty;
  theme?: any;
}

TU.assertTrue<DeepRequiredEquals<styleProps,ExpectedStyleProps>>()

expect(style({})).toEqual([])

})
