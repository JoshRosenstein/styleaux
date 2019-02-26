export interface ILocalOptions<P> {
  getterFn?: Function
  path?: string
  postFn?: any
  preFn?: any
  props?: P
  defaultTransform?: boolean
  defaultLookup?: boolean
  //key?: string /// OLD
  //path?: string
  // getter?: transformFuncs /// OLD
  // postFn?: transformFuncs
  //preFn?: transformFuncs
}

export interface transformStyleOptions<P> extends ILocalOptions<P> {
  value: string | number
  cssProp?: string
  valueOnly?: boolean
}

export type transformStyleConfig = {
  /**
   * TODO
   */
  value: string | number
  /**
   * TODO
   */
  cssProp?: string
  /**
   * TODO
   */
  valueOnly?: boolean
  /**
   * TODO
   */
  path?: string
  /**
   * TODO
   */
  postFn?: any
  /**
   * TODO
   */
  preFn?: any
}

export type transformStylePConfig = {
  /**
   * TODO
   */
  value: string | number
  /**
   * TODO
   */
  cssProp?: string
  /**
   * TODO
   */
  valueOnly?: boolean
  /**
   * TODO
   */
  path?: string
  /**
   * TODO
   */
  postFn?: any
  /**
   * TODO
   */
  preFn?: any
}
