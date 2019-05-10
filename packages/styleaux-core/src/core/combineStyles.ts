import { Arg1, UnionOf, UnionToIntersection } from '../types';
import { CSSObj } from '@styleaux/types';

/**
 * Intersects all of the first arguments in each function
 */
export type Arg1FromFuncTuple<T extends any[]> = UnionToIntersection<
  Arg1<UnionOf<T>>
>;

/**
 * If a prop type wasn't passed, assume from each function arg
 */
type GetProps<P, FNS extends any[]> = [P] extends [never]
  ? Partial<Arg1FromFuncTuple<FNS>>
  : Partial<P>;

/**
 * combineStyles
 * --------------
 * TODO
 *
 * ![Random](https://www.fillmurray.com/180/180)
 */
export function combineStyles<
  P extends {} = never,
  FNS extends any[] = ([P] extends [never] ? any : (p: any) => CSSObj[])[]
>(...fns: FNS) {
  return (props: GetProps<P, FNS>) =>
    fns
      .reduce((acc, fn) => {
        return [...acc, ...fn(props)];
      }, [])
      .filter(Boolean);
}

/**
 * Utility Type Helper to combine multiple style mixin
 */

export type StyleProps<T extends Function | Function[]> = T extends any[]
  ? Arg1FromFuncTuple<T>
  : Arg1<T>;
