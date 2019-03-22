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
  ): IStyles
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
    {},
  )

  return createStyles(styles) as any

  // as (props:P)=>any & {styles:typeof styles}
}

// interface IColors {
//   red: string;
//   blue: string;
//   green: string;
// }

// interface IMedia {
//   small: string;
//   medium: string;
//   large: string;
// }

// interface IMyTheme {
//   colors: IColors;
//   media: IMedia;
// }

// const myTheme: IMyTheme = {
//   colors: {
//     red: "#f00",
//     green: "#0f0",
//     blue: "#00f"
//   },
//   media: {
//     small: "@media (min-width: 30em)",
//     medium: "@media (min-width: 40em)",
//     large: "@media (min-width: 50em)"
//   }
// };

// const styles = {
//   noDisplay: { display: "none" },
//   width: (input: string) => ({ width: input }),
//   color: (input: Extract<keyof IColors, string>) => ({ color: input })
// };
// const styles2 = {
//   margin: (input: string) => ({ margin: input })
// };
// const styles3 = {
//   padding: (input: string) => ({ padding: input })
// };

// const stylesArrays = {
//   px: [
//     (input: string) => ({ paddingLeft: input }),
//     (input: string) => ({ paddingRight: input })
//   ]
// };

// const dummy = createStyles<typeof styles, IMyTheme, IMedia>(styles, {
//   defaultTheme: myTheme
// });

// const dummy2 = createStyles<typeof styles2, IMyTheme, IMedia>(styles2);
// const dummy3 = createStyles(styles2);
// const dummy4 = createStyles(styles3);
// const dummyArray = createStyles(stylesArrays);

// const dummyArrayT = dummyArray({ px: "1" });

// export const combo2 = combineStyles(dummy, dummy4);

// const combo2T = combo2<IMyTheme, IMedia>({
//   theme: myTheme,
//   // width: "1",
//   color: { small: "blue" },
//   noDisplay: { small: true, medium: true, large: true, all: true }
// });

// https://github.com/Microsoft/TypeScript/issues/22679

// declare function combine<
//   T extends object[] &
//     {
//       [K in Indices<T>]: {
//         [K2 in keyof T[K]]: K2 extends GetUnionKeys<T[Exclude<Indices<T>, K>]> ? never : any
//       }
//     }
// >(objectsToCombine: T): Combine<T>
//const t=[{ foo: number }, { bar: string }]
// const marr = [
//   (input: string) => ({ paddingLeft: input }),
//   (input: number) => ({ paddingRight: input })
// ];
// type mar = typeof marr;

// type Indices<T> = Exclude<keyof T, keyof any[]>;
// type ExtractArg1FromArray<T> = Arg1<T[Indices<T>]>;

// type result2 = ExtractArg1FromArray<mar>;
