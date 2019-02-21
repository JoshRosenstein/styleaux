# stylePreset

```js
import {createStylePreset} from './createStylePreset'

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

const styles = createStylePreset({
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

const {style} = createStylePreset({d})

export {style}
```
