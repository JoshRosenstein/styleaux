import {wrapWithQuotesIfStringContainsSpace,spaceSeparatedList,commaSeparatedList} from '../'
import {Arg1} from '../__testUtils__/types'



const basicInputdata:Array< [Arg1<typeof wrapWithQuotesIfStringContainsSpace>, ReturnType<typeof wrapWithQuotesIfStringContainsSpace>]> = [
  ["10px", "10px"],
  ["with space", `"with space"`],

]


test.each(basicInputdata)("pxToRem(input:%p)", (input, expected) =>{

  expect(wrapWithQuotesIfStringContainsSpace(input)).toEqual(expected)


})
test('SpaceSeparatedList',()=>{

  expect(spaceSeparatedList('works')).toEqual('works')
  expect(spaceSeparatedList(['works','with','array'])).toEqual('works with array')
})

test('CommaSeparatedList',()=>{

  expect(commaSeparatedList('works','with','args')).toEqual('works, with, args')
  expect(commaSeparatedList(['works','with','array'])).toEqual('works, with, array')
})
