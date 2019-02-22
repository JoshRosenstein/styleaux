import {num} from './utils'

export const px = (n: any) => (num(n) ? n + 'px' : n)
export const percent = (n: any) => (!num(n) || n > 1 ? px(n) : `${n * 100}%`)

export const getWidth = (n: any) => (!num(n) || n > 1 ? px(n) : n * 100 + '%')
export const getBorder = (n: any) => (num(n) && n > 0 ? `${n}px solid` : n)
