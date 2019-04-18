import {important} from '../wrappers'
import {PickCSSProps} from '@styleaux/types'

export interface SrOnly extends PickCSSProps<'border' | 'clip' | 'height' | 'margin' | 'overflow' | 'padding' | 'position' | 'width'> {}

export function srOnly(): SrOnly {
    return {
      border: important(0),
      clip: important('rect(0 0 0 0)'),
      height: important('1px'),
      margin: important('-1px'),
      overflow: important('hidden'),
      padding: important(0),
      position: important('absolute'),
      width: important('1px'),
    };
}
