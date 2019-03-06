import {ResponsiveProp} from '../types'

export interface IResponsiveOptions<B> {
  /**
   * Todo
   */
  value: ResponsiveProp<string | number, B>
  /**
   * Todo
   */
  defaultValue?: ResponsiveProp<string | number, B>
  /**
   * Todo
   */
  transformer?: any
  /**
   * Todo
   */
  breakpoints?: B

  /**
   * The css property this function should map to
   */
  cssProp: string

  // /**
  //  * The property of the component's props to read from
  //  */
  // prop: Extract<keyof P, string>

  // /**
  //  * The property within the theme to map the `prop` value to
  //  */
  // themeProp?: K

  // /**
  //  * The resolver to be used for array values
  //  */
}
