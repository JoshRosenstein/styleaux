// @flow

export type pxToStrT = (pxValue: number | string) => string
export type pxToNumT = (pxValue: number | string) => number
export type pxToT = {
  <T extends number>(unit: undefined): (pxValue: T) => T
  <T extends string>(unit: T): (pxValue: number | T) => T

  (unit: string | undefined): (
    pxValue: number | string | void,
  ) => number | string | void
}
