import {createStyles} from './createStyles'

import {InferPropsFromFunctionArgument, IStyles} from './types'
import {UnionOf,UnionToIntersection} from '../types'
import {STYLES_KEY} from '../constants'
import {CreateStylesInput,CreateStyleStatics,CreateStyleReturn} from './createStyles'

export type InferStyleFromFunction<T> = T extends {[STYLES_KEY]: infer S}
  ? S
  : T extends {[STYLES_KEY]: infer S}[]
  ? S
  : {}
  export type InferPropsFromFunctionsArgument<T extends any[]>=UnionToIntersection<InferPropsFromFunctionArgument<UnionOf<T>>>
  export type InferStyleFromFunctions<T extends any[]>=UnionToIntersection<InferStyleFromFunction<UnionOf<T>>>


export interface CombineStyleReturnType<FNS extends any[],Styles=InferStyleFromFunctions<FNS>> extends CreateStyleStatics<Styles> {
  (props:InferPropsFromFunctionsArgument<FNS>): IStyles[]
}

export type CombineStyleReturnType2<FNS extends any[],M extends {}=never,T extends {}=never,Styles=InferStyleFromFunctions<FNS>> =
[M] extends [never]?CombineStyleReturnType<FNS>:CreateStyleReturn<Styles,T,M,never>



export type ArrayInfer<T> = T extends (infer U)[] ? U : never;
export function combineStyles<Fns extends {
  (props: {}): IStyles[]
  styles: {}
}[],M extends {}=never,T extends{}=never>(
  ...fns: Fns
): CombineStyleReturnType2<Fns,M,T> {
  const styles = fns.reduce(
    (acc, fn) => ({
      ...acc,
      ...fn.styles,
    }),
    {} as CreateStylesInput,
  )

  return createStyles(styles) as any

}


export type StyleProps<
  T1 extends {},
  T2 = {},
  T3 = {},
  T4 = {},
  T5 = {},
  T6 = {},
  T7 = {},
  T8 = {},
  T9 = {}
> = InferPropsFromFunctionArgument<T1> &
InferPropsFromFunctionArgument<T2> &
InferPropsFromFunctionArgument<T3> &
InferPropsFromFunctionArgument<T4> &
InferPropsFromFunctionArgument<T5> &
InferPropsFromFunctionArgument<T6> &
InferPropsFromFunctionArgument<T7> &
InferPropsFromFunctionArgument<T8> &
InferPropsFromFunctionArgument<T9>

export type StyleTypes<
  T1 extends {},
  T2 = {},
  T3 = {},
  T4 = {},
  T5 = {},
  T6 = {},
  T7 = {},
  T8 = {},
  T9 = {}
> = InferStyleFromFunction<T1> &
  InferStyleFromFunction<T2> &
  InferStyleFromFunction<T3> &
  InferStyleFromFunction<T4> &
  InferStyleFromFunction<T5> &
  InferStyleFromFunction<T6> &
  InferStyleFromFunction<T7> &
  InferStyleFromFunction<T8> &
  InferStyleFromFunction<T9>
