

import {InferPropsFromFunctionsArgument} from './combineStyles'
import {Simplify} from '../types'
import {ObjectInterpolation3} from '../cssTypes2'

//  const compose = <P>(...funcs: Array<typeof createStyles2>) => {
//   const func = (props:P) => {
//     const n = funcs.map(fn => fn(props))
//     return n
//   }

//   return func
// }

// interface BProps{

//   b?:number
//   d?:string
// }
// interface AProps{
// a?:boolean
// }

// interface CombinedProps extends BProps,AProps{
// }

// const a=createStyles2<AProps>({'a':{margin:1}},props=>({margin:props.a?1:2}))
// const b=createStyles2<BProps>({'b':{margin:1},d:(_input,_props,_mediakey)=>({backgroundColor:'blue'})},props=>({margin:props.b?1:2}))

// const c=combineStyles2(a,b)
// const d=combineStyles2<ResponsiveObject<CombinedProps,{sm:string}>>(a,b)({a:{sm:true}})

// {
// c
// d
// }


type GetProps<P,FNS extends any[]>=[P] extends [never]? Simplify<InferPropsFromFunctionsArgument<FNS>>:P

export function combineStyles2<P extends {}= never,FNS extends any[]=([P] extends [never]? any: (p:any)=>ObjectInterpolation3[] )[] >(
  ...fns: FNS
) {


  return (props:GetProps<P,FNS>)=>fns.reduce(
    (acc,fn) => {

      return [...acc,...fn(props)]
   },[]).filter(Boolean)

  // const [styles,styleOrFunc] = fns.reduce(
  //   ([arg1,arg2], fn) => ([{
  //     ...arg1,
  //     ...fn[CreateStyleKeys.arg1],
  //   },
  //   fn[CreateStyleKeys.arg2] ? arg2.concat(fn[CreateStyleKeys.arg2]):arg2]),
  //   [{},[]] as any,
  // )

  // return createStyles2<[P] extends [never]? InferPropsFromFunctionsArgument<FNS>:P>(styles,styleOrFunc[0] && styleOrFunc)

}

// const a=combineStyles2(
//   (props:{color:string})=>({color:'red'}),
//   (props:{colorss:string})=>({color:'red'})
//   )

//   type A=Simplify<Arg1<typeof a>>
