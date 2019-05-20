import { Omit } from '@styleaux/types';
import { StyleOptions } from '@styleaux/core';

export type Config<Props, Theme> = Partial<
  Omit<StyleOptions<Props, Theme>, 'cssProp' | 'prop'>
>;
