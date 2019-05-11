import { isNil } from 'typed-is';

export const objOfMany = <K extends string | number>(...names: K[]) => <V>(
  value: V,
): V extends null | undefined ? V : { [A in K]: V } => {
  if (isNil(value)) {
    return value as any;
  }
  return names.reduce(
    (acc, key) => {
      acc[key] = value;
      return acc;
    },
    {} as any,
  );
};

export const objOf = <K extends string | undefined | null | number>(
  input: K[] | K,
) => {
  return objOfMany(
    ...([] as NonNullable<K>[]).concat(input as any).filter(Boolean),
  );
};
