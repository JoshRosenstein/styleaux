import { PickCSSProps } from '@styleaux/types';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Ellipsis
  extends PickCSSProps<'whiteSpace' | 'overflow' | 'textOverflow'> {}

export function ellipsis(): Ellipsis {
  return {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };
}
