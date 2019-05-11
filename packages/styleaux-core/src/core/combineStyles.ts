import { GetProps } from './types';
import { CSSObj } from '@styleaux/types';

/**
 * If a prop type wasn't passed, assume from each function arg
 */
type PropsOrGetProps<P, FNS extends any[]> = [P] extends [never]
  ? Partial<GetProps<FNS>>
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
  return (props: PropsOrGetProps<P, FNS>) =>
    fns
      .reduce((acc, fn) => {
        return [...acc, ...fn(props)];
      }, [])
      .filter(Boolean);
}
