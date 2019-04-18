/**
 * Array wrapper wraps a function accepting a tuple of type `A`, so it can
 * either accept the tuple as its first argument or as a simple list of
 * arguments
 *
 * @param fn A function accepting an argument tuple/array `A` and returning a value of type `R`
 */

const ensureArray=v=>Array.isArray(v)?v:[v]
export const arrayWrapper = <A extends T[], T, R>(fn: (...args: A) => R) =>
  ((...args: [A] | A) =>
    fn(...(args.length === 1 ? (ensureArray(args[0]) as A) : (args as A)))) as {
    (...values: A): R;
    (values: A | A[number] ): R;
  };
