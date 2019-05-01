import {splitUnit} from '../splitUnit'
import {Arg1} from '../../__testUtils__/types'


const basicInputdata:Array< [Arg1<typeof splitUnit>, ReturnType<typeof splitUnit>]> = [
  ["10px", {prefix: "", value: 10, unit: "px"}],
  ["-10px", {prefix: "", value: -10, unit: "px"}],
  ["a10%",{prefix: "a", value: 10, unit: "%"}],
  [10,{prefix: "", value: 10, unit: ""}],
  [0,{prefix: "", value: 0, unit: ""}],
  ['0px',{prefix: "", value: 0, unit: "px"}],
]

test.each(basicInputdata)("splitUnit(input:%p)", (input, expected) =>{

  expect(splitUnit(input)).toEqual(expected)


})
