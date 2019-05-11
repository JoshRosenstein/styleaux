import { MarginProperty } from '@styleaux/csstype';
import { directionalPropertyFactory } from './directionalProperty';

export const margin = directionalPropertyFactory<MarginProperty>('margin');
