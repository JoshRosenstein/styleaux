
import {createStyles2,CreateStyleKeys} from './createStyles2'
import {InferPropsFromFunctionArgument,ResponsiveObject} from './types'
import {UnionOf} from '../types'
import {ObjectInterpolation3} from '../cssTypes2'
export const compose = <P>(...funcs: Array<typeof createStyles2>) => {
  const func = (props:P) => {
    const n = funcs.map(fn => fn(props))
    return n
  }

  return func
}

interface BProps{
    /**
     * The number of columns a column should span. If an array is passed, each index of the array corresponds to
     * a break-point in ascending order.
     */
  b?:number
  d?:string
}
interface AProps{
  /**
   * The number of columns a column should span. If an array is passed, each index of the array corresponds to
   * a break-point in ascending order.
   */
a?:boolean
}
interface CombinedProps extends BProps,AProps{
}

const a=createStyles2<AProps>({'a':{margin:1}},props=>({margin:props.a?1:2}))
const b=createStyles2<BProps>({'b':{margin:1},d:(_input,_props,_mediakey)=>({backgroundColor:'blue'})},props=>({margin:props.b?1:2}))

const c=combineStyles(a,b)
const d=combineStyles<ResponsiveObject<CombinedProps,{sm:string}>>(a,b)({a:{sm:true}})

{
c
d
}

export type InferPropsFromFunctionsArgument<T extends any[]>=InferPropsFromFunctionArgument<UnionOf<T>>

export function combineStyles<P extends {}= never,FNS extends any[]=([P] extends [never]? any: (p:any)=>ObjectInterpolation3[] )[] >(
  ...fns: FNS
) {
  const [styles,styleOrFunc] = fns.reduce(
    ([arg1,arg2], fn) => ([{
      ...arg1,
      ...fn[CreateStyleKeys.arg1],
    },arg2.concat(fn[CreateStyleKeys.arg2])]),
    [{},[]] as any,
  )

  return createStyles2<[P] extends [never]? InferPropsFromFunctionsArgument<FNS>:P>(styles,styleOrFunc)

}
