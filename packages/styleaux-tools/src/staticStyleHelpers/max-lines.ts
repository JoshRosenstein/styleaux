import {px} from '../units'
import {OverflowProperty,Box,MaxHeightProperty,WhiteSpaceProperty} from '@roseys/csstype'


export interface MaxLines {
  overflow: OverflowProperty;
  boxSizing: Box;
  maxHeight: MaxHeightProperty<string>;
  whiteSpace?: WhiteSpaceProperty;
}

export function applyMaxLines(lines: number, lineHeight: number): MaxLines {
  return {
      overflow: "hidden",
      boxSizing: "content-box",
      maxHeight: px(lines * lineHeight),
      whiteSpace: lines === 1 ? "nowrap" : undefined,
  };
}
