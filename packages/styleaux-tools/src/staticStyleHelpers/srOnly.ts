import * as CSS from "@styleaux/csstype";
import {important} from '../important'


export interface SrOnly {
  border: CSS.BorderProperty,
  clip: CSS.ClipProperty,
  height: CSS.HeightProperty,
  margin: CSS.MarginProperty,
  overflow: CSS.OverflowProperty,
  padding: CSS.PaddingProperty,
  position: CSS.PositionProperty,
  width: CSS.WidthProperty,
}

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
