import { CSSObj } from '../cssTypes'
import { UnionOf, UnionToIntersection, Arg1 } from '../types'

/**
 * Intersects all of the first arguments in each function
*/
export type Arg1FromFuncTuple<
  T extends any[]
  > = UnionToIntersection<Arg1<UnionOf<T>>>

/**
 * If a prop type wasn't passed, assume from each function arg
*/
type GetProps<P, FNS extends any[]> = [P] extends [never]
  ? Partial<Arg1FromFuncTuple<FNS>>
  : P

/**
* combineStyles
* --------------
* TODO
*
* ![Random](https://www.fillmurray.com/180/180)
*/
export function combineStyles<
  P extends {} = never,
  FNS extends any[] = ([P] extends [never]
    ? any
    : (p: any) => CSSObj[])[]
>(...fns: FNS) {
  return (props: GetProps<P, FNS>) =>
    fns
      .reduce((acc, fn) => {
        return [...acc, ...fn(props)]
      }, [])
      .filter(Boolean)
}

/**
 * Utility Type Helper to combine multiple style mixin
 */
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
  > = Arg1<T1> &
  Arg1<T2> &
  Arg1<T3> &
  Arg1<T4> &
  Arg1<T5> &
  Arg1<T6> &
  Arg1<T7> &
  Arg1<T8> &
  Arg1<T9>
