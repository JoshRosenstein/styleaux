import { ColorProperty, BoxShadowProperty } from '@styleaux/csstype'
import { arrayWrapper } from '../helpers'
import { isDefined } from 'typed-is'
export interface BoxShadowOptions {
  /**
   * *The **`inset`** keyword changes the shadow to one inside the frame (as if the content was depressed inside the box). Inset shadows are drawn inside the border (even transparent ones), above the background, but below content.
   * If not specified (default), the shadow is assumed to be a drop shadow (as if the box were raised above the content).
   *
   * */

  inset?: boolean
  /**
   *  These are two <length> values to set the shadow offset. <offset-x> specifies the horizontal distance. Negative values place the shadow to the left of the element. <offset-y> specifies the vertical distance. Negative values place the shadow above the element. See <length> for possible units.
   * If both values are 0, the shadow is placed behind the element (and may generate a blur effect if <blur-radius> and/or <spread-radius> is set).
   * */
  offsetX: string | 0
  /**
   * These are two <length> values to set the shadow offset. <offset-x> specifies the horizontal distance. Negative values place the shadow to the left of the element. <offset-y> specifies the vertical distance. Negative values place the shadow above the element. See <length> for possible units.
   * If both values are 0, the shadow is placed behind the element (and may generate a blur effect if <blur-radius> and/or <spread-radius> is set).
   * */
  offsetY: string | 0
  /**
   * * This is a third <length> value. The larger this value, the bigger the blur, so the shadow becomes bigger and lighter. Negative values are not allowed. If not specified, it will be 0 (the shadow's edge is sharp).
   * */
  blurRadius?: string | 0
  /**
   *This is a fourth <length> value. Positive values will cause the shadow to expand and grow bigger, negative values will cause the shadow to shrink. If not specified, it will be 0 (the shadow will be the same size as the element).
   * */
  spreadRadius?: string | 0
  /**
   * See <color> values for possible keywords and notations.
   * If not specified, the color used depends on the browser - it is usually the value of the color property, but note that Safari currently paints a transparent shadow in this case.
   * */
  color?: ColorProperty
}

 const shadowOptionHelper = (inset: boolean)=>( offsetX: string | 0,
  offsetY: string | 0, blurRadius?: string | 0, spreadRadius?: string | 0,
  color?: ColorProperty): BoxShadowOptions => (
  { inset, offsetX, offsetY, blurRadius, spreadRadius, color })

  export const shadowO=shadowOptionHelper(false)
  export const insetShadowO=shadowOptionHelper(true)

/**
 * Generates boxshadow
 *
 */
const boxShadowV=(...shadows: BoxShadowOptions[]): BoxShadowProperty=> {
  return shadows
    .map(shadow => {
      return [
        shadow.inset && 'inset',
        shadow.offsetX,
        shadow.offsetY,
        shadow.blurRadius,
        shadow.spreadRadius,
        shadow.color,
      ]
        .filter(isDefined)
        .join(' ')
    })
    .filter(s => s !== '')
    .join(',')
}

const backgroundS=(...shadows: BoxShadowOptions[])=> ({'boxShadow':boxShadowV(...shadows)})



export const boxShadowValue= arrayWrapper(boxShadowV)
export const boxShadow= arrayWrapper(backgroundS)

