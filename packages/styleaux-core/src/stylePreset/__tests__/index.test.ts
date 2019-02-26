import {createStylePreset} from '../'

import {MarginTopProperty} from '@johanneslumpe/css-types'

const theme = {
  breakpoints: {xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920},
  space: {
    none: 0,
    xxs: 2,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 32,
    xl: 64,
    xxl: 128,
  },
  colors: {
    red: '#f5222d',
    vermilion: '#fa541c',
    orange: '#fa8c16',
    amber: '#faad14',
    yellow: '#fadb14',
    lime: '#a0d911',
    green: '#52c41a',
    teal: '#13c2c2',
    blue: '#1890ff',
    indigo: '#2f54eb',
    violet: '#5141DE',
    purple: '#722ed1',
    magenta: '#eb2f96',
    slate: '#6f9cb3',
    dusk: '#7781a6',
    blueGray: '#aeb9cb',
    lightGray: '#bfbfbf',
    gray: '#808080',
    darkGray: '#404040',
    nuetral: '#97a4a4',
  },
}

const {
  // style,
  responsiveProp,
  // pxTo,
  // pxToEm,
  // pxToRel,
  // pxToRem,
  // getDefaultTheme,
  // gettheme,
} = createStylePreset({
  defaultTheme: theme,
  autoLookupTheme: true,
  cssPropToThemeKeyMap: {
    margin: 'spacing',
    padding: 'spacing',
    color: 'colors',
  },
  autoLookupTransformer: true,
  cssPropToFunctionMap: {
    fontSize: 'pxToRem',
    padding: 'pxToRem',
  },
  transformers: {
    pxOrPct: (v: number) => (v < 1 ? 1 * 100 + '%' : v + 'px'),
  },
})

const mt = responsiveProp<{mt: MarginTopProperty | number}, typeof theme>({
  cssProp: 'marginTop',
  prop: 'mt',
})

it('Works ', () => {
  const test1 = responsiveProp<any>({cssProp: 'marginTop', prop: 'marginTop'})({
    marginTop: 16,
  })
  const test2 = mt({mt: 16})
  const test3 = responsiveProp<{mt: MarginTopProperty | number}, typeof theme>({
    cssProp: 'marginTop',
    prop: 'mt',
    postFn: 'pxToRem',
  })({
    mt: 16,
  })
  const test4 = responsiveProp<{mt: MarginTopProperty | number}, typeof theme>({
    cssProp: 'marginTop',
    prop: 'mt',
    postFn: (v: number) => v + 2,
  })({
    mt: 16,
  })
  //const test5 = style({cssProp: 'marginTop', path: 'spacing'})
  //const test6 = style({cssProp: 'marginTop', path: 'spacing'})

  expect(test1).toEqual({marginTop: 16})
  expect(test2).toEqual({marginTop: 16})
  expect(test3).toEqual({marginTop: '1rem'})
  expect(test4).toEqual({marginTop: 18})
})
