import { PickCSSProps, PickCSSPropsPartial } from '@styleaux/types';
import { px } from '../units';
export interface MaxLines
  extends PickCSSProps<'overflow' | 'boxSizing' | 'maxHeight'>,
    PickCSSPropsPartial<'whiteSpace'> {}

export function applyMaxLines(lines: number, lineHeight: number): MaxLines {
  return {
    overflow: 'hidden',
    boxSizing: 'content-box',
    maxHeight: px(lines * lineHeight),
    whiteSpace: lines === 1 ? 'nowrap' : undefined,
  };
}
