import {colors} from '../colors'
import {THEME,IMedia} from '../../__testutils__/theme'
import {toStyles} from '../../__testutils__/toStyles'
import {Arg1} from '@styleaux/core/dist-types/types'


type colorsType = Arg1<typeof colors>

const data: Array<[string, colorsType, any]> = [
  ['empty', {}, {}],
  ['color', {color: 'red'}, {color: 'red'}],
  ['backgroundColor', {backgroundColor: 'red'}, {backgroundColor: 'red'}],
  ['color & backgroundColor', {backgroundColor: 'red',color: 'red'}, {color: 'red',backgroundColor: 'red'}],
]

test.each(data)(
  '%# [%s]  ',
  (_name: string, props: {}, expected: any) => {
    expect(toStyles(colors({theme: THEME, ...props}))).toEqual(expected)
  },
)

test.todo('Test All border Rules')
