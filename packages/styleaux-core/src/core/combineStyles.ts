import {createStyles} from './createStyles'

import {EtractInputType, WithTheme, IStyles, ResolveStyleProps} from './types'

import {STYLES_KEY, STYLE_PROPS_KEY} from '../constants'

export type InferStyleFromFunction<T> = T extends {styles: infer S}
  ? S
  : T extends {styles: infer S}[]
  ? S
  : {}

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

export interface CombineStyleReturnType<STYLE> {
  <T extends {} = never, B extends {} = never>(
    props: WithTheme<EtractInputType<STYLE>, T, B>,
  ): IStyles[]
  [STYLES_KEY]: STYLE
  [STYLE_PROPS_KEY]: ResolveStyleProps<STYLE>
}

export function combineStyles<T1>(
  fn1: T1,
): CombineStyleReturnType<InferStyleFromFunction<T1>>

// export function combineStyles<T1, T2>(
//   fn1: T1,
//   fn2: T2
// ): CombineStyleReturnType<
//   InferStyleFromFunction<T1> & InferStyleFromFunction<T2>
// >;

export function combineStyles<T1, T2>(
  fn1: T1,
  fn2: T2,
): CombineStyleReturnType<StyleTypes<T1, T2>>

export function combineStyles<T1, T2, T3>(
  fn1: T1,
  fn2: T2,
  fn3: T3,
): CombineStyleReturnType<StyleTypes<T1, T2, T3>>

export function combineStyles<T1, T2, T3, T4>(
  fn1: T1,
  fn2: T2,
  fn3: T3,
  fn4: T4,
): CombineStyleReturnType<StyleTypes<T1, T2, T3, T4>>

export function combineStyles<T1, T2, T3, T4, T5>(
  fn1: T1,
  fn2: T2,
  fn3: T3,
  fn4: T4,
  fn5: T5,
): CombineStyleReturnType<StyleTypes<T1, T2, T3, T4, T5>>

export function combineStyles<T1, T2, T3, T4, T5, T6>(
  fn1: T1,
  fn2: T2,
  fn3: T3,
  fn4: T4,
  fn5: T5,
  fn6: T6,
): CombineStyleReturnType<StyleTypes<T1, T2, T3, T4, T5, T6>>

export function combineStyles<T1, T2, T3, T4, T5, T6, T7>(
  fn1: T1,
  fn2: T2,
  fn3: T3,
  fn4: T4,
  fn5: T5,
  fn6: T6,
  fn7: T7,
): CombineStyleReturnType<StyleTypes<T1, T2, T3, T4, T5, T6, T7>>

export function combineStyles<T1, T2, T3, T4, T5, T6, T7, T8>(
  fn1: T1,
  fn2: T2,
  fn3: T3,
  fn4: T4,
  fn5: T5,
  fn6: T6,
  fn7: T7,
  fn8: T8,
): CombineStyleReturnType<StyleTypes<T1, T2, T3, T4, T5, T6, T7, T8>>

export function combineStyles<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
  fn1: T1,
  fn2: T2,
  fn3: T3,
  fn4: T4,
  fn5: T5,
  fn6: T6,
  fn7: T7,
  fn8: T8,
  fn9: T9,
): CombineStyleReturnType<StyleTypes<T1, T2, T3, T4, T5, T6, T7, T8, T9>>

export function combineStyles<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
  fn1: T1,
  fn2: T2,
  fn3: T3,
  fn4: T4,
  fn5: T5,
  fn6: T6,
  fn7: T7,
  fn8: T8,
  fn9: T9,
  fn10: T10,
): CombineStyleReturnType<
  StyleTypes<T1, T2, T3, T4, T5, T6, T7, T8, T9> & StyleTypes<T10>
>

export function combineStyles<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(
  fn1: T1,
  fn2: T2,
  fn3: T3,
  fn4: T4,
  fn5: T5,
  fn6: T6,
  fn7: T7,
  fn8: T8,
  fn9: T9,
  fn10: T10,
  fn11: T11,
): CombineStyleReturnType<
  StyleTypes<T1, T2, T3, T4, T5, T6, T7, T8, T9> & StyleTypes<T10, T11>
>
export function combineStyles<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12
>(
  fn1: T1,
  fn2: T2,
  fn3: T3,
  fn4: T4,
  fn5: T5,
  fn6: T6,
  fn7: T7,
  fn8: T8,
  fn9: T9,
  fn10: T10,
  fn11: T11,
  fn12: T12,
): CombineStyleReturnType<
  StyleTypes<T1, T2, T3, T4, T5, T6, T7, T8, T9> & StyleTypes<T10, T11, T12>
>

export function combineStyles<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13
>(
  fn1: T1,
  fn2: T2,
  fn3: T3,
  fn4: T4,
  fn5: T5,
  fn6: T6,
  fn7: T7,
  fn8: T8,
  fn9: T9,
  fn10: T10,
  fn11: T11,
  fn12: T12,
  fn13: T13,
): CombineStyleReturnType<
  StyleTypes<T1, T2, T3, T4, T5, T6, T7, T8, T9> &
    StyleTypes<T10, T11, T12, T13>
>

export function combineStyles<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14
>(
  fn1: T1,
  fn2: T2,
  fn3: T3,
  fn4: T4,
  fn5: T5,
  fn6: T6,
  fn7: T7,
  fn8: T8,
  fn9: T9,
  fn10: T10,
  fn11: T11,
  fn12: T12,
  fn13: T13,
  fn14: T14,
): CombineStyleReturnType<
  StyleTypes<T1, T2, T3, T4, T5, T6, T7, T8, T9> &
    StyleTypes<T10, T11, T12, T13, T14>
>

export function combineStyles<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15
>(
  fn1: T1,
  fn2: T2,
  fn3: T3,
  fn4: T4,
  fn5: T5,
  fn6: T6,
  fn7: T7,
  fn8: T8,
  fn9: T9,
  fn10: T10,
  fn11: T11,
  fn12: T12,
  fn13: T13,
  fn14: T14,
  fn15: T15,
): CombineStyleReturnType<
  StyleTypes<T1, T2, T3, T4, T5, T6, T7, T8, T9> &
    StyleTypes<T10, T11, T12, T13, T14, T15>
>

export function combineStyles<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16
>(
  fn1: T1,
  fn2: T2,
  fn3: T3,
  fn4: T4,
  fn5: T5,
  fn6: T6,
  fn7: T7,
  fn8: T8,
  fn9: T9,
  fn10: T10,
  fn11: T11,
  fn12: T12,
  fn13: T13,
  fn14: T14,
  fn15: T15,
  fn16: T16,
): CombineStyleReturnType<
  StyleTypes<T1, T2, T3, T4, T5, T6, T7, T8, T9> &
    StyleTypes<T10, T11, T12, T13, T14, T15, T16>
>

export function combineStyles(
  ...fns: {
    (props: {}): IStyles
    styles: {}
  }[]
) {
  const styles = fns.reduce(
    (acc, fn) => ({
      ...acc,
      ...fn.styles,
    }),
    {} as any,
  )

  return createStyles(styles)

  // as (props:P)=>any & {styles:typeof styles}
}


// TODO: determin if we need maintain order or not
// export function combineStyles(
//   ...fns: {
//     (props: {}): IStyles
//     styles: {}
//   }[]
// ) {

//   let  styles:IStyles =  {}
//   const len = fns.length;
//   let obj;


//   for (let i = 0; i < len; i++) {
//     obj = fns[i]
//     for (let key in obj) {
//     if(obj.hasOwnProperty(key)){
//     delete styles[key]
//     }
//     styles[key]= obj[key]
//     }
//   }

//   return createStyles(styles)


// }
