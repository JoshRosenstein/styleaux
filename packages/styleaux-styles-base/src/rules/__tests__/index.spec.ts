import {border} from '../border'


const data = [
  ["works", 0, {}, {border:0}],

]



test.each(data)("%# [%s] border(input:%p, props:%p)=>%p  ", (_name: string, input: string | 0, props: {},) =>{

  expect(border(input,{props})).toEqual({border:0})

})

test.todo('Test All border Rules');
