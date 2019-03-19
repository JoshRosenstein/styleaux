import { Properties } from "csstype";


export type CSSPropertyKeys = keyof Properties;

export type GlobalCssValues = "inherit" | "initial" | "unset";

export type Omit<ObjectType, KeysType extends keyof ObjectType> = Pick<
  ObjectType,
  Exclude<keyof ObjectType, KeysType>
>;

export type Merge<FirstType, SecondType> = Omit<
  FirstType,
  Extract<keyof FirstType, keyof SecondType>
> &
  SecondType;


  export type NeverToUndefined<T> = [T] extends [never]? undefined: T
