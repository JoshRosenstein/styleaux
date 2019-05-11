import { Style } from '@styleaux/types';
import { GetProps, PropStyleArrayFunc, Props } from './types';
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
  P extends Props = Props,
  FNS extends any[] = PropStyleArrayFunc<Props>[]
>(...fns: FNS) {
  return (props: PropsOrGetProps<P, FNS>): Style[] =>
    fns.reduce((acc, fn) => {
      const s = fn(props);
      return s ? acc.concat(s) : acc;
    }, []);
}
