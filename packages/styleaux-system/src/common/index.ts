export const num = (n: any) => typeof n === 'number' && !isNaN(n)
export const px = (n: any) => (num(n) ? n + 'px' : n)

export const getWidth = (n: any) => (!num(n) || n > 1 ? px(n) : n * 100 + '%')
export const getBorder = (n: any) => (num(n) && n > 0 ? `${n}px solid` : n)
