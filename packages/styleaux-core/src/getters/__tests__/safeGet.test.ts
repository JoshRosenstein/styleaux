import {safeGet} from '../safeGet'

test('works',()=>{
  expect(safeGet('a')({a:1})).toEqual(1)
})

test('negative value',()=>{
  expect(safeGet('-a')({a:1})).toEqual(-1)
})

test('works with fallback lookup',()=>{
  expect(safeGet('a',{a:1})({aa:1})).toEqual(1)
})

test('negative value with fallback lookup',()=>{
  expect(safeGet('-a',{a:1})({aa:1})).toEqual(-1)
})


test('[Arrays] works',()=>{
  expect(safeGet(1)([1,2])).toEqual(2)
})

test('[Arrays] works negative value',()=>{
  expect(safeGet(-1)([1,2])).toEqual(-2)
})

test('[Arrays] works with fallback lookup',()=>{
  expect(safeGet(1,[1,2])([])).toEqual(2)
})

test('[Arrays] negative value with fallback lookup',()=>{
  expect(safeGet(-1,[1,2])([])).toEqual(-2)
})

test(' fallback value',()=>{
  expect(safeGet(-1,'this')([])).toEqual('this')
})
