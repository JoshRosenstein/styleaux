import {pxToRem,pxToRelative,pxToPct} from '../px-to'
import {Arg1} from '../../__testUtils__/types'



const basicInputdata:Array< [Arg1<typeof pxToRem>, ReturnType<typeof pxToRem>]> = [
  ["10px", 10/16 +'rem'],
  [10, 10/16 +'rem'],
  ['2rem', '2rem'],

]

test.each(basicInputdata)("pxToRem(input:%p)", (input, expected) =>{

  expect(pxToRem(input)).toEqual(expected)


})

const pxToRelativeData:Array< [Arg1<typeof pxToRelative>, ReturnType<typeof pxToRelative>]> = [
  ["10px", 10/16 ],
  [10, 10/16 ],
  ['2rem', '2rem'],

]
test.each(pxToRelativeData)("pxToRelative(input:%p)", (input, expected) =>{

  expect(pxToRelative(input)).toEqual(expected)


})

const pxToPctData:Array< [Arg1<typeof pxToPct>, ReturnType<typeof pxToPct>]> = [
  ["10px", 10/16*100+'%' ],
  [10, 10/16*100+'%' ],
  ['2rem', '2rem'],

]
test.each(pxToPctData)("pxToPct(input: %s )", (input, expected) =>{

  expect(pxToPct(input)).toEqual(expected)


})
