import {borders} from '../border'
import {THEME} from '../../__testutils__/theme'
import {toStyles} from '../../__testutils__/toStyles'
import {Arg1} from '@styleaux/core/dist-types/types'


type bordersType = Arg1<typeof borders>

const data: Array<[string, bordersType, any]> = [
  ['empty', {}, {}],
  ['basic', {border: '5px solid red'}, {border: '5px solid red'}],
]

test.each(data)(
  '%# [%s] border(input:%p, props:%p)=>%p  ',
  (_name: string, props: {}, expected: any) => {
    expect(toStyles(borders({theme: THEME, ...props}))).toEqual(expected)
  },
)

test.todo('Test All border Rules')
