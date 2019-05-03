import {
  BackgroundColorProperty,
  BackgroundImageProperty,
  BackgroundPositionProperty,
  BackgroundSizeProperty,
  BoxShadowProperty,
} from '@styleaux/csstype';
import { important } from '../wrappers';
import { PickCSSProps } from '@styleaux/types';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DebugProps
  extends PickCSSProps<'color' | 'backgroundColor' | 'outline'> {}

export interface Debug {
  backgroundPosition: BackgroundPositionProperty;
  backgroundImage: BackgroundImageProperty;
  backgroundSize: BackgroundSizeProperty;
  backgroundColor: BackgroundColorProperty;
  '*:not(path):not(g)': DebugProps & { boxShadow: BoxShadowProperty };
}

/**
 * Outlines all elements to debug CSS
 */
export function debug({
  color = '#66BBFF',
  backgroundColor = 'hsla(210, 100%,50%, 0.5)',
  outline = '0.125rem solid rgba(102,187,255,0.5)',
}: Partial<DebugProps> = {}): Debug {
  return {
    backgroundPosition: 'top left',
    backgroundImage:
      'linear-gradient(0deg, transparent, transparent .9em, rgba(102,187,255,0.25) .9em), linear-gradient(90deg, transparent, transparent .9em, rgba(102,187,255,0.25) .9em)',
    backgroundSize: '1em 1em',
    backgroundColor: '#001424',
    '*:not(path):not(g)': {
      color: important(color),
      backgroundColor: important(backgroundColor),
      outline: important(outline),
      boxShadow: important('none'),
    },
  };
}
