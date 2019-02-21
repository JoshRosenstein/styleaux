// @flow

export type pxToStrT = (pxValue: number | string) => string
export type pxToNumT = (pxValue: number | string) => number
export type pxToT = (
  unit: string | undefined,
) => (pxValue: number | string | void) => number | string | void
