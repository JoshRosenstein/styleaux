import {backgroundColor,color,textColor } from '../index'
import { toStyles} from "../__testUtils__";



// export type Arg1<T> = T extends (arg1: infer U, ...args: any[]) => any
//   ? U
//   : undefined

//   export type DeepSimplify<
//   T,
//   U extends object | undefined = undefined
// > = T extends object
//   ? {
//       [P in keyof T]: T[P] extends U | Function
//         ? T[P]
//         : DeepSimplify<T[P], U>
//     }
//   : T

//    type BackgroundColorProps= DeepSimplify<Arg1<typeof backgroundColor>>

   test('backgroundColor',()=>{

    expect(backgroundColor({bg:'lightpink'})).toEqual([{backgroundColor:'lightpink'}])
   })

   test('textColor',()=>{

    expect(textColor({color:'magenta'})).toEqual([{color:'magenta'}])
   })
   test('color',()=>{

    expect(toStyles(color({bg:'lightpink',color:'maroon'}))).toEqual({backgroundColor:'lightpink',color:'maroon'})
   })
