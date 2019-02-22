import {percent} from './transformers'

export const displayConfig = {
  prop: 'display',
}

export const alignItemsConfig = {
  prop: 'alignItems',
}

export const alignContentConfig = {
  prop: 'alignContent',
}

export const justifyContentConfig = {
  prop: 'justifyContent',
}

export const flexWrapConfig = {
  prop: 'flexWrap',
}

export const flexBasisConfig = {
  prop: 'flexBasis',
  postFn: percent,
}
export const flexGrowConfig = {
  prop: 'flexGrow',
}

export const flexShrinkConfig = {
  prop: 'flexShrink',
}

export const flexDirectionConfig = {
  prop: 'flexDirection',
}

export const flexConfig = {
  prop: 'flex',
}

export const justifySelfConfig = {
  prop: 'justifySelf',
}

export const alignSelfConfig = {
  prop: 'alignSelf',
}

export const orderConfig = {
  prop: 'order',
}
