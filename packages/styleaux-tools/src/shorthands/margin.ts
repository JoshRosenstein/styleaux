import { directionalPropertyFactory } from './directionalProperty';
import { MarginProperty } from '@styleaux/csstype';

export const margin = directionalPropertyFactory<MarginProperty>('margin');
