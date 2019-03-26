export type Arg1<T> = T extends (arg1: infer U, ...args: any[]) => any
  ? U
  : undefined
