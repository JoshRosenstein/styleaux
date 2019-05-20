import { Arg1, Args, AnyFunc } from '@styleaux/types';
import {
  flatten,
  toArray,
  mergeAllDeepRight,
  objOf,
  mergeAll,
  pick,
} from '@roseys/futils';

export const toStyles = (styles) =>
  mergeAllDeepRight([{}, ...flatten(toArray(styles))]);

export const wrapTheme = <
  R extends { theme: Record<string, any> } = { theme: Record<string, any> }
>(
  ...args: [Record<string, any>]
): R => objOf('theme', mergeAll(args));

export const pickTheme = <T extends Record<string, any>, K extends keyof T>(
  theme: T,
  keys: K | K[],
): Pick<T, K> => pick(keys, theme);

export const createPicker = <T extends Record<string, any>>(obj: T) => <
  K extends keyof T
>(
  ...keys: K[]
): Pick<T, K> => pick(keys, obj);

export function snapshot<Fn extends AnyFunc, StyleFn = ReturnType<Fn>>(
  mainfn: Fn,
  ...args: Args<Fn>
) {
  const fn: any = mainfn(...args);
  return (props: Arg1<StyleFn>, label?: string) => {
    let snapshotName = JSON.stringify(
      {
        args: args,
        props,
      },
      null,
      2,
    );
    if (label) {
      snapshotName = `[${label}] ${snapshotName}`;
    }
    expect(fn(props)).toMatchSnapshot(snapshotName);
  };
}
